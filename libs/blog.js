// show related posts
// hit this api multiple time if multiple category`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/api/v1/blog/tags/${category}/${post.drupal_internal__nid}`
import axios from "axios";
export async function getRelatedBlogs(post, id) {
    try {
        const category = post.map((item) => {
            return item.name;
        });
        const result = await Promise.all(
            category.map((item) => {
                return axios(
                    `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/api/v1/blog/tags/${item}/${id}`
                );
            })
        );
        const data = result.map((item) => item.data);
        // merge all the array into one and remove if content key is there
        const merged = [].concat.apply([], data);
        // remove the item which has content key
        const filtered = merged.filter((item) => {
            return !item.content;
        });
        // show only 3 related posts
        return JSON.parse(JSON.stringify(filtered.slice(0, 3)));
    } catch (error) {
        console.log(error);
    }
}
