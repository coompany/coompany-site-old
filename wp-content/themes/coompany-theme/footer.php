<?php
/**
 * Created by JetBrains PhpStorm.
 * Project: Coompany’s site
 * User: Andrea Jemmett - acidghost
 * Date: 20/12/13
 * Time: 18:00
 */
?>

			<footer class="row">

				<div class="col-xs-2 col-xs-offset-1">
					<h6>Prodotti:</h6>
					<?php
					$products_terms = get_terms('prodotti', array('hide_empty'=>false));
					if(count($products_terms) > 0) {
						echo '<ul class="list-unstyled">';
						foreach($products_terms as $product) {
							echo '<li><a href="'.get_term_link($product).'">'.$product->name.'</a></li>';
						}
						echo '</ul>';
					}
					?>
				</div>
				<div class="col-xs-2">
					<h6>About:</h6>
					<ul class="list-unstyled">
						<li><a href="#">Chi siamo</a></li>
						<li><a href="#">Contatti</a></li>
						<li><a href="#">Team</a></li>
						<li><a href="#">Work with us</a></li>
					</ul>
				</div>
				<div class="col-xs-2">
					<h6>Connect:</h6>
					<ul class="list-unstyled">
						<li><a href="#">Facebook</a></li>
						<li><a href="#">Twitter</a></li>
						<li><a href="#">LinkedIn</a></li>
						<li><a href="#">Bollenti Spiriti</a></li>
					</ul>
				</div>

			</footer>

		</div><!-- /container -->

		<?php wp_footer(); ?>

	</body>
</html>
