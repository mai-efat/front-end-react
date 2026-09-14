import styles from './BlogDetails.module.css';
import ArticleHeader from './Components/articleHeader/ArticleHeader';
import ArticleContent from './Components/articleContent/ArticleContent';
import ArticleSidebar from './Components/articleSidebar/ArticleSidebar';
import CtaCard from './Components/ctaCard/CtaCard';
import MoreArticles from './Components/moreArticles/MoreArticles';








function BlogDetails() {
         
  return (
             <>
      
    <main className={styles.blogContent}>
      <section className= {styles.articleLayout}>
         <article className= {styles.articleContent}>
            <ArticleHeader/>
           <ArticleContent/>
           <CtaCard/>
         </article>
         <aside >
        <ArticleSidebar/>
        </aside>

      </section>
      
      <section className={styles.moreSynkra}>
       <MoreArticles/>
      </section>
    </main>
         
             </>

   );
}
export default BlogDetails;
