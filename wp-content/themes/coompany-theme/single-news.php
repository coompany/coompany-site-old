<?php
/**
 * Created by PhpStorm.
 * Project: coompany-site
 * User: Andrea Jemmett - acidghost
 * Date: 7/27/14
 * Time: 1:17 PM
 */

echo get_header();

$image_url = wp_get_attachment_url( get_post_thumbnail_id(get_the_ID()) );
$datetime = new DateTime();
$datetime->setTimestamp(get_the_time('U'));
$date_exploded = explode(' ', get_the_date());
$str_time = $date_exploded[0].' '.$date_exploded[1];
?>

            <section class="row" id="single-news">
                <article class="col-sm-7 col-sm-offset-5">
                    <h2><?php the_title(); ?></h2>
                    <div class="news-image" style="background-image: url(<?php echo $image_url; ?>)">&nbsp;</div>
                    <div class="news-time">
                        <time datetime="<?php echo $datetime->format('Y-m-d H:m'); ?>">
                            <?php echo $str_time; ?> <small><?php echo $date_exploded[2]; ?></small>
                        </time>
                    </div>
                    <div class="content"><?php echo apply_filters('the_content', $post->post_content); ?></div>
                    <section class="comments">
                        <?php echo disqus_embed('coompany'); ?>
                    </section>
                </article>
            </section>

<?php
echo get_footer();
?>