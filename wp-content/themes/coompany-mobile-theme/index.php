<?php
/**
 * Created by PhpStorm.
 * Project: coompany-site
 * User: Andrea Jemmett - acidghost
 * Date: 10/8/14
 * Time: 5:04 PM
 */

get_header();

query_posts( 'post_type=features&prodotti=coo2plan&orderby=menu_order&order=ASC' );
?>

            <div class="row">

                <section class="col-xs-12" id="section-products">
                    <?php if(have_posts()) :

                        global $wp_query;
                        $index = 0;
                        while(have_posts()) : the_post();

                            $ID = get_the_ID();

                            $parallax = get_field('parallax_img');
                            $parallax_css = 'style="background-image: url('.$parallax.');"';

                            $video = get_field('video');
                            $video_iframe = '<iframe type="text/html" width="640" height="360" src="'.$video.'" frameborder="0"></iframe>';
                            ?>
                            <?php if($index==0) : // this is the first feature ?>
                                <div class="row">
                                    <article class="col-xs-12">
                                        <div class="feature text-center">
                                            <?php if($parallax) { ?>
                                                <div class="feature-bg" <?php echo $parallax_css; ?>></div>
                                            <?php } ?>
                                            <div class="row">
                                                <div class="col-xs-12">
                                                    <h3><?php the_title(); ?></h3>
                                                    <h6><?php echo get_field('caption'); ?></h6>
                                                    <div class="content">
                                                        <?php the_content(); ?>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                        </div>
                                    </article>
                                </div>
                            <?php elseif($index!=$wp_query->post_count-1) : // those are the middle features ?>
                                <div class="row">
                                    <article class="col-xs-12">
                                        <div class="feature">
                                            <?php if($parallax) { ?>
                                                <div class="feature-bg" <?php echo $parallax_css; ?>></div>
                                            <?php } ?>
                                            <div class="row">
                                                <div class="col-xs-12 text-left feature-<?php echo get_the_ID(); ?>">
													<h3><?php the_title(); ?></h3>
													<h6><?php echo get_field('caption'); ?></h6>
													<div class="content">
														<?php if(get_field('link_more')) { ?>
															<?php the_excerpt(); ?>
															<a href="<?php echo get_permalink(); ?>" class="btn btn-primary">More</a>
														<?php } else {
															the_content();
														} ?>
													</div>
                                                </div>
                                                <div class="col-xs-12 text-center media-content feature-<?php the_ID(); ?>">
													<?php
                                                    if($video) { echo $video_iframe; }
                                                    else { ?> <img src="<?php echo wp_get_attachment_url( get_post_thumbnail_id(get_the_ID()) ); ?>" /> <?php }
                                                    ?>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            <?php else: // this is the last feature ?>
                                <div class="row">
                                    <article class="col-xs-12">
                                        <div class="feature last">
                                            <?php if($parallax) { ?>
                                                <div class="feature-bg" <?php echo $parallax_css; ?>></div>
                                            <?php } ?>
                                            <div class="row">
                                                <div class="col-xs-12">
                                                    <div class="animation-container">
                                                        <img src="<?php echo wp_get_attachment_url( get_post_thumbnail_id(get_the_ID()) ); ?>" />
                                                    </div>
                                                    <h3><a href="http://signup.coompany.eu/" target="_blank"><?php the_title(); ?></a></h3>
                                                    <h6><?php echo get_field('caption'); ?></h6>
                                                    <hr />
                                                    <div class="content">
                                                        <?php the_content(); ?>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            <?php endif;
                            $index++;
                        endwhile;

                    else : ?>

                        <h3 class="text-center">We're sorry...<br /><small>something went wrong</small></h3>

                    <?php endif; ?>
                </section>

            </div>

<?php get_footer(); ?>