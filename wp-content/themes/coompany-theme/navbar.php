<?php
/**
 * Created by JetBrains PhpStorm.
 * Project: Coompany’s site
 * User: Andrea Jemmett - acidghost
 * Date: 20/12/13
 * Time: 22:15
 */
?>

<nav class="navbar">
	<div class="row">
		<div class="navbar-header">
			<a class="navbar-brand">
				<h1 class="sr-only"><?php bloginfo('name'); ?></h1>
				<img src="<?php echo get_template_directory_uri(); ?>/images/coom-logo.png" />
			</a>
		</div>
	</div>
	<div class="row" id="menu-row">
		<?php
		$args = array(
			'theme_location' => 'main-menu',
			'depth'      => 2,
			'container'  => false,
			'menu_class'     => 'nav navbar-nav',
			'walker'     => new Bootstrap_Walker_Nav_Menu()
		);

		wp_nav_menu($args);
		?>
	</div>
</nav>