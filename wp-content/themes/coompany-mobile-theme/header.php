<?php
/**
 * Created by PhpStorm.
 * Project: coompany-site
 * User: Andrea Jemmett - acidghost
 * Date: 10/8/14
 * Time: 5:04 PM
 */
?>
<!doctype html>

<!--[if lt IE 7]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if (IE 7)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if (IE 8)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><!--> <html <?php language_attributes(); ?> class="no-js"><!--<![endif]-->

<head>
    <meta charset="utf-8">

    <?php // Google Chrome Frame for IE ?>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

    <title><?php if (is_front_page()) { bloginfo('name'); } else { wp_title(''); } ?></title>

    <?php // mobile meta (hooray!) ?>
    <meta name="HandheldFriendly" content="True">
    <meta name="MobileOptimized" content="320">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    <?php // icons & favicons (for more: http://www.jonathantneal.com/blog/understand-the-favicon/) ?>
    <link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/library/images/apple-icon-touch.png">
    <link rel="icon" href="<?php echo get_template_directory_uri(); ?>/favicon.png">
    <!--[if IE]>
    <link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico">
    <![endif]-->
    <?php // or, set /favicon.ico for IE10 win ?>
    <meta name="msapplication-TileColor" content="#f01d4f">
    <meta name="msapplication-TileImage" content="<?php echo get_template_directory_uri(); ?>/library/images/win8-tile-icon.png">

    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

    <?php // wordpress head functions ?>
    <?php wp_head(); ?>
    <?php // end of wordpress head ?>

    <?php // drop Google Analytics Here ?>
    <?php // end analytics ?>

</head>

<body <?php body_class(); ?>>

    <div class="container">

        <header class="header">

            <div id="brand-header">
                <div>
                    <h1>
                        <a href="<?php bloginfo( 'url' ) ?>/" title="<?php bloginfo( 'name' ) ?>" rel="homepage">
                            <span class="sr-only"><?php bloginfo('name'); ?></span>
                            <img src="<?php echo get_template_directory_uri(); ?>/library/images/coom-logo.png" alt="<?php bloginfo('name'); ?>" />
                        </a>
                    </h1>
                </div>
            </div>

        </header> <?php // end header ?>
