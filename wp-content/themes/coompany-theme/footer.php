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

				<div class="footer-col">
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
				<div class="footer-col">
					<h6>About:</h6>
					<ul class="list-unstyled">
						<li><a href="<?php echo get_bloginfo('url'); ?>/chi-siamo">Chi siamo</a></li>
						<li><a href="<?php echo get_bloginfo('url'); ?>/contatti">Contatti</a></li>
						<li><a href="<?php echo get_bloginfo('url'); ?>/chi-siamo">Team</a></li>
                        <li><a href="<?php echo get_bloginfo('url'); ?>/contatti">Partners</a></li>
						<li><a href="http://jobs.coompany.eu">Work with us</a></li>
					</ul>
				</div>
				<div class="footer-col">
					<h6>Connect:</h6>
					<ul class="list-unstyled">
						<li><a target="_blank" href="https://www.facebook.com/coompany.srls">Facebook</a></li>
						<li><a target="_blank" href="https://twitter.com/CoompanySrls">Twitter</a></li>
						<li><a target="_blank" href="https://www.linkedin.com/company/3364688">LinkedIn</a></li>
						<!--<li><a target="_blank" href="http://bollentispiriti.regione.puglia.it/index.php?option=com_community&view=groups&task=viewgroup&groupid=1090&Itemid=1301340">Bollenti Spiriti</a></li>-->
					</ul>
				</div>

                <div class="footer-col pull-right hidden-xs">
                    <h6>Coompany S.r.l.s</h6>
                    <p>
                        <a target="_blank" href="http://maps.google.com/?q=Via%20Abate%20Gimma%20248%2070122%20Bari">
                            Via Abate Gimma 248<br />
                            70122 Bari<br />
                        </a>
                        <small>P.IVA  IT0752120723</small>
                    </p>
                </div>

			</footer>

		</div><!-- /container -->

    <?php echo get_template_part('analytics'); ?>
		<?php wp_footer(); ?>

	</body>
</html>
