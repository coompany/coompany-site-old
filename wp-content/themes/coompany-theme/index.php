<?php
/**
 * Created by JetBrains PhpStorm.
 * Project: Coompany’s site
 * User: Andrea Jemmett - acidghost
 * Date: 19/12/13
 * Time: 11:51
 */

echo get_header();
?>

			<div class="jumbotron">
				<h1>Welcome!</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue dolor, malesuada vitae ullamcorper vitae, interdum in tortor. Maecenas id placerat diam, ut accumsan tortor.</p>
				<?php echo get_template_part('navbar'); ?>
			</div>

<?php echo get_footer('index'); ?>