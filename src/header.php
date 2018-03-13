<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Learn
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<div class="page-container"> 
        <header id="masthead" class="header site-header" role="banner">
            
            <div class="brand">
                <?php if (is_front_page() && is_home()){ ?>
                    <?php if (ot_get_option('logo_upload')) {?>
                        <h1 class="brand__name">
                            <span class="brand__text"><img class="brand__img" src="<?php echo ot_get_option('logo_upload'); ?>" /></span>
                        </h1>
                    <?php } else { ?>
                        <h1 class="brand__name">
                            <span class="brand__text"><?php bloginfo('name'); ?></span>
                        </h1>
                    <?php } ?>
                    
                <?php } else {?>
                    <div class="brand__name">
                        <a class="brand__text" href="<?php echo home_url(); ?>"><?php bloginfo('name'); ?></a>
                    </div>
                <?php } ?>
            </div>
            <div class="feedback">
                <?php if (ot_get_option('header_feedback_on_off') !=  'off') { ?>
                    <a href="#header-feedback-form" class="feedback-form-link"><?php echo ot_get_option('feedback_title'); ?></a>   
                <?php } ?>
            
                <div id="header-feedback-form" class="mfp-hide white-popup-block">
                    <?php if (ot_get_option('feedback_form')) {?>
                        <p><?php echo do_shortcode(ot_get_option('feedback_form'));  ?>
                        </p>
                    <?php } ?>
                </div>

            </div>

			<nav class="navbar">
				<button id="navbar-toggle" class="navbar-toggle" type="button" data-target="#navbarCollapse" aria-controls="navbarCollapse"
				    aria-expanded="false" aria-label="Toggle navigation">
				</button>
				<ul class="nav nav-inline" id="navbarCollapse">
					<li class="nav-item d-inline-block">
						<a class="nav-link" href="#">about us</a>
					</li>
					<li class="nav-item d-inline-block">
						<a class="nav-link" href="#">services</a>
					</li>
					<li class="nav-item d-inline-block">
						<a class="nav-link" href="#">works</a>
					</li>
					<li class="nav-item d-inline-block">
						<a class="nav-link" href="#">blog</a>
					</li>
					<li class="nav-item d-inline-block">
						<a class="nav-link" href="#">contact</a>
					</li>
				</ul>
			</nav>
		</header>
