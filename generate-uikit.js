const fs = require("fs");
const {
  omit,
  keys,
  kebabCase,
  reduce,
  set,
  get,
  forEach,
  uniq
} = require("lodash");

const sourceDir = "./src";

const args = process.argv.slice(2);

const [uikitName] = args;

const getUIKitPath = () => {
  const currentDirectory = process.cwd();
  const localPathToUIKit = "api-cli/app/sandbox/client/uikit";

  return currentDirectory.replace(/blocks$/, localPathToUIKit);
};

const getJSONFromFile = path => JSON.parse(fs.readFileSync(path, "utf8"));

const writeObjToFile = (obj, filepath) => {
  // if (!fs.existsSync(filepath)) {
  //   fs.mkdirSync(filepath);
  // }

  fs.writeFileSync(filepath, JSON.stringify(obj, null, 2) , 'utf-8');
}

if (!fs.existsSync(sourceDir)) {
  fs.mkdirSync(sourceDir);
}

const UIKitPath = getUIKitPath();

const [palette, typography, dependencies] = [
  "pallete",
  "typography-preset",
  "uikit-dependencies"
].map(path => getJSONFromFile(`${UIKitPath}/${path}/${uikitName}.json`));

const getNewColorName = color => color.replace(/color/i, "");

const adaptPalette = palette => {
  const newPalette = {
    name: palette.name,
    color: {}
  };

  keys(palette.colors).map(key => {
    const newKey = getNewColorName(key);

    newPalette.color[newKey] = palette.colors[key];
  });

  writeObjToFile(newPalette, './src/palette.json')
};

const adaptTypography = (typography, dependencies) => {
  const newTypography = {
    name: typography.name
  };

  newTypography.settings = reduce(
    typography.settings,
    (acc, value, key) => {
      let depKey = `${kebabCase(key)}-color`;
      if (key === "headingLarge") {
        depKey = "heading-lg-color";
      }

      if (key === "smallText") {
        depKey = "small-color";
      }

      if (key === "subHeading") {
        depKey = "subheading-color";
      }
      const color = ["light", "dark"].map(theme =>
        getNewColorName(dependencies[theme].typography[depKey])
      );
      acc[key] = {
        ...typography.settings[key],
        color
      };

      return acc;
    },
    {}
  );

  newTypography.settings.link = {
    color:
      uniq(
        ["light", "dark"].map(theme =>
          getNewColorName(dependencies[theme].link["link-color"])
        )
      ),
    hover: {
      color:
        uniq(
          ["light", "dark"].map(theme =>
            getNewColorName(dependencies[theme].link["link-hover-color"])
          )
        )
    }
  };

  writeObjToFile(newTypography, './src/typography.json')
};

const mapButtonPropsToNewProps = type => props => {
  const propsMap = {
    bg: "bg.color",
    color: "color",
    "border-color": "border.color",
    "shadow-color": "shadow.color"
  };

  const newProps = reduce(
    props,
    (acc, theme, themeName) => {
      forEach(theme, (value, key) => {
        const regexp = new RegExp(`.+(-${type}-)(.+$)`, "i");
        const [, , propName] = key.match(regexp);
        const newKey = propsMap[propName];
        const newColor = getNewColorName(value);

        if (themeName === "dark") {
          newColor !== get(acc, newKey)[0] && set(acc, `${newKey}.1`, newColor);
        } else {
          set(acc, newKey, [newColor]);
        }
      });

      return acc;
    },
    {}
  );

  return newProps;
};

const mapButtonsStateToNewState = dependencies => type => {
  const states = ["default", "hover", "active"];
  const newButtonsStates = reduce(
    states,
    (acc, state) => {
      acc[state] = mapButtonPropsToNewProps(
        state === "default" ? type.replace(/-(.+)$/, "") : state
      )({
        light: dependencies.light.buttons[type][state],
        dark: dependencies.dark.buttons[type][state]
      });
      return acc;
    },
    {}
  );

  return newButtonsStates;
};

const adaptButtons = dependencies => {
  const buttonsMap = {
    primary: "primary",
    primaryAlt: "primary-alternative",
    secondary: "secondary",
    secondaryAlt: "secondary-alternative"
  };

  const newButtons = {
    name: uikitName,
    general: {
      fontFamily: "'Lato', sans-serif",
      borderWidth: "1px"
    },
    size: {
      sm: {
        padding: "10px 16px",
        borderRadius: 0,
        fontSize: "14px"
      },
      md: {
        padding: "14px 40px",
        borderRadius: 0,
        fontSize: "14px"
      },
      lg: {
        padding: "20px 56px",
        borderRadius: 0,
        fontSize: "16px"
      }
    },
    settings: {}
  };

  const mapToNewState = mapButtonsStateToNewState(dependencies);

  newButtons.settings = reduce(
    buttonsMap,
    (acc, oldKey, newKey) => {
      acc[newKey] = mapToNewState(oldKey);
      return acc;
    },
    {}
  );

  writeObjToFile(newButtons, './src/buttons.json')
};


adaptPalette(palette);

adaptTypography(typography, dependencies);

adaptButtons(dependencies);



