import React from "react";
import "../App.css";
import ReactFlow, { ReactFlowProvider } from "reactflow";
import "reactflow/dist/style.css";

const nodes = [
  {
    id: "1",
    position: { x: 200, y: 0 },
    data: {
      label: "Data Ingestion\n(API calls, web scraping, book downloading)",
    },
    style: { width: 350, textAlign: "center" },
  },
  {
    id: "2",
    position: { x: 200, y: 120 },
    data: { label: "Cloud Storage" },
    style: { width: 300, textAlign: "center" },
  },
  {
    id: "3",
    position: { x: 200, y: 240 },
    data: { label: "Data Processing\n(Apache Spark)" },
    style: { width: 350, textAlign: "center" },
  },
  {
    id: "4",
    position: { x: 200, y: 360 },
    data: {
      label: "Feature Extraction\n(BERT embeddings, time-series analysis)",
    },
    style: { width: 380, textAlign: "center" },
  },
  {
    id: "5",
    position: { x: 200, y: 480 },
    data: { label: "Model Training\n(Vertex)" },
    style: { width: 300, textAlign: "center" },
  },
  {
    id: "6",
    position: { x: 650, y: 240 }, // shifted to the right of node 3
    data: { label: "BigQuery" },
    style: { width: 300, textAlign: "center" },
  },
  {
    id: "7",
    position: { x: 200, y: 600 },
    data: { label: "Dashboard\n(Looker Studio)" },
    style: { width: 300, textAlign: "center" },
  },
];

const edges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3" },
  { id: "e3-4", source: "3", target: "4" },
  { id: "e4-5", source: "4", target: "5" },
  { id: "e5-7", source: "5", target: "7" },
  { id: "e3-6", source: "3", target: "6", label: "Queries" },
  { id: "e6-7", source: "6", target: "7" },
];

function Gedanken() {
  return (
    <div className="MainContent">
      <h1>
        Gedanken Project: A Recipe For The Most Successful Cookbook in America
      </h1>
      <p>
        Lavanya Bharani<sup>1</sup>
        <br />
        <sup>1</sup>Department of Computer Science, Tufts University, Medford,
        MA
        <br />
        <br />
        Read more about Gedanken{" "}
        <a
          href="https://www.britannica.com/science/Gedankenexperiment"
          target="_blank"
          rel="noreferrer"
        >
          here.{" "}
        </a>
      </p>
      <h3>1. INTRODUCTION</h3>
      <p>
        One of the largest categories of short-form videos on platforms such as
        Tiktok is cooking and recipes - this side of Tiktok is popularly
        referred to as "food-tok" [1, 2]. If they gain enough of a following,
        the next step for these influencers is to write and publish a cookbook
        [3]. Believe it or not, Americans are still fondly purchasing physical
        cookbooks, despite the plethora of recipes available online [4,5]. In
        fact, the cookbook industry seems to be steadily growing at a rate of 8%
        per year (per BookScan data), and has been following this trend since
        2010 [5]. The success - defined in this paper as number of sales - of a
        cookbook is influenced by many factors such as cuisine, format,
        category, and time of release. While this analysis aims to offer
        guidance, it is not prescriptive; rather, it should complement the
        creative and cultural diversity inherent to cookbook creation [21].
      </p>

      <h4>1.1 Originality</h4>
      <p>
        Though driven by their passion for food and recipe development, cookbook
        authors do not have a comprehensive analysis of cook- book sales and
        what really makes a cookbook a best-seller. If one performs a Google
        search with the prompt ”what makes a success- ful cookbook?” the results
        yield largely anecdotal advice in list for- mat from successful authors
        such as Joy the Baker [7]. Many online blogs second the sentiment that
        cookbooks have become generic and follow the same format [8].
      </p>
      <p>
        Therefore, this paper proposes a fairly novel piece of work - one that
        is not anecdotal and biased, but rather one that is data- driven and
        science-backed. This project seeks to understand the patterns in
        cookbook trends influenced by the cuisine, format, cat- egory, and time
        of release of the book. This greatly differs from the information out
        there for the beneficiaries, which is largely in the form of blog posts
        written by anyone from professional chefs with several published
        cookbooks to amateur home cooks venting to their audience.
      </p>
      <p>
        The book industry has been undergoing significant changes with
        advancements in technology, and industry professionals are starting to
        explore the use of machine learning and artificial in- telligence for
        book sales, self-publishing, and improving access to books [9, 10].
        However, these tools are not being used to help authors create content
        and assess the details, text, and formats of books - especially in the
        food industry. This is a window of oppor- tunity in the food industry
        that would be extremely influential and lucrative for authors,
        publishers, and retailers of cookbooks.
      </p>

      <h4>1.2 Practicality</h4>
      <p>
        The first step in implementation of this project is to acquire sales
        data for cookbooks from Amazon, as well as obtain digital, full-text
        cookbooks. With the sales data, trends can be extracted per cuisine,
        category, and time of release of the cookbook. The full-text cook- books
        will be used to analyze the format, as well as further confirm the
        category (i.e. determine if the book is accurately categorized per the
        sales data). Obtaining such data would require strong part- nerships
        with Amazon, as well as libraries or bookstores to obtain the full-text
        versions of the cookbooks.
      </p>
      <p>
        This size of data would require a cloud computing platform (GCP) for
        scalable storage and processing. In order to process the data, data
        science and machine learning Python libraries includ- ing Pandas, Numpy,
        NLTK, TensorFlow, and SciKit-Learn would be needed for NLP, machine
        learning, and time-series forecasting. With GCP, Big Query can be
        utilized to perform data warehous- ing and Dataproc clusters can be used
        for processing such large datasets. This way, this type of extensive and
        variety of data can be efficiently handled.
      </p>
      <p>
        The publishing industry is using the aforementioned tools to help
        facilitate publishing and encourage books sales and recommendations, but
        such analysis does not yet exist for the grow- ing cookbook industry [9,
        10]. Companies such as Trajectory have demonstrated the effectiveness of
        using NLP and machine learning for analyzing the content of books and
        providing more visibility for authors and books, which is extremely
        valuable for the publishing industry, in general [11].
      </p>
      <p>
        Based on the existing technologies of cloud computing platforms and NLP
        frameworks, the scale and variety of this cookbook data will be
        appropriately handled and analyzed for this project.
      </p>

      <h4> 1.3 Benefits for Humankind</h4>
      <p>
        This project would be of great value to cookbook authors, publishers,
        and retailers alike. Though not all cookbook authors are in the business
        for monetary gain and rather to share their art with oth- ers, they
        would not be equipped to make data-driven decisions with publishers
        about the format and time of release of their book based on the cuisine
        and category of the book. Publishing houses and re- tailers such as
        Amazon would also benefit because there would be less guesswork in
        choosing which cookbooks would get published or marketed heavily.
      </p>
      <p>
        Per my research, there is no concrete data available on what makes a
        cookbook ”good” (or successful, as described in this paper). There are
        several chefs, home cooks, bakers on various internet forums surveying
        the cooking community for what they are looking for in a good cookbook,
        but the responses of a few Reddit-ers may not be satisfactory in
        deciding which format, category, cuisine to pursue [19]. Publishing
        Xpress advises authors to tell their authentic stories with writing and
        food, as well as provide eye-catching photos [20]. However, there lacks
        transparency in which cookbooks are selected for publication and which
        ones in the long run do well in the market and what attributes the
        cookbooks have, driving the need for this project.
      </p>
      <p>
        With such data analysis available, there is a risk of hurting cookbook
        authors that deviate from the trends extracted from this project. In
        machine learning, the best algorithm is the one that gen- eralizes to
        the data the best, but here, we run the risk of over-generalization of
        the cookbook industry. It has to be understood by all of these
        beneficiaries that this analysis is meant to serve as a guide rather
        than the decision maker. The driving goal of this project is to help the
        cookbook authors and present them with the facts to help guide their
        writing and decision making process. Such data-driven strategies could
        help independent authors and small publishers make a footprint in the
        field.
      </p>
      <br />
      <h3>2. CONTEXT</h3>
      <p>
        With the steady growth of the cookbook industry at 8% per year de- spite
        the availability of digital recipes, it is imperative that a deeper dive
        is taken to explore what actually makes a cookbook success- ful [5]. The
        success of a cookbook can be influenced by a variety of variables, such
        as its format, category, release time, and cuisine type. Currently,
        there is no comprehensive, data-driven framework for predicting what
        makes a cookbook successful. This Gedanken Projekt aims to analyze
        trends in cookbooks and their sales to iden- tify key factors that
        contribute to its success.
      </p>
      <h4>2.1 Project Value</h4>
      <p>
        A tremendous amount of time and resources is invested in the creation,
        production and marketing of cookbooks by authors, pho- tographers,
        publishers, and retailers. In addition to the mentioned cookbook growth
        rate, recipe videos remain one of the top category of all videos created
        for TikTok [1, 2]. These ”influencers” inevitably end up writing
        cookbooks, and their followers purchase them - whether for utility or
        decoration. Despite this, the factors that determine the success of the
        cookbook itself remain largely anecdotal and ambiguous [7]. By using
        data science techniques, this project can help these stakeholders become
        aware of the realities of the cookbook industry, make informed
        decisions, and optimize their strategies. Understanding consumer
        preferences can lead to more relevant and desirable content for all food
        enthusiasts.
      </p>
      <h4>2.2 Personal Interest</h4>
      <p>
        I have been passionate about baking and cooking since I was 10 years
        old. A few years ago, I decided I wanted to share my cre- ations and
        recipes online and decided to make an Instagram account dedicated to
        baking. Through this experience, I have become more invested in recipe
        development and food photography, and thus I am personally invested and
        curious to see what insights big data techniques will reveal about
        cookbook successes. Over the past few years, I have been investigating
        the patterns that my favorite chefs and authors follow in an attempt to
        learn more about how to pene- trate the market and create my own brand
        in the food world. How- ever, as demonstrated in prior sections of this
        paper, there is not much documentation for aspiring cookbook authors
        regarding the best performing formats, styles, and categories for
        cookbooks in the United States. I hope to write a cookbook one day, so
        this project is especially meaningful, and as an added bonus, this
        project bridges my interests in cooking and data science.
      </p>
      <h4>2.3 Big Data Justification</h4>
      <p>
        This project requires significant text analysis of the cookbooks
        themselves, which will require natural language processing (NLP)
        techniques. This analysis will be used to assess the category, for- mat,
        and style of each cookbook in the cohort.
      </p>
      <p>
        In addition, this project involves analyzing very large datasets for
        publishing and sales data from Amazon. Amazon offers more than 20
        million books in the United States and controls over 50% of all new book
        sales in the United States, dominating the market [12]. This project
        also encompasses studying seasonal patterns in cookbook sales and
        launches. With such volume, variety, and ve- locity of data, cloud
        computing services such as GCP for storage, processing, and analysis are
        required for this big data problem.
      </p>
      <p>
        Existing cookbook trends are typically based on subject industry
        experience rather than data-driven analysis. This project seeks to
        introduce a quantitative approach through the use of big data techniques
        like NLP for text and format analysis, as well as time-series modeling
        for learning seasonal trends in sales. This project draws from multiple
        data sources, providing a comprehensive and predictive framework for
        cookbook success.
      </p>
      <h4> 2.4 Funding</h4>
      <p>
        The stakeholders here include publishing houses, such as Random House
        and Chronicle Books, retailers, such as Amazon and Barnes & Noble, big
        tech companies, such as Google and Meta, and culinary influencers and
        chefs. Publishing house would value insights into cookbook market trends
        so that they can prioritize books that follow the format and style of
        those that are deemed successful by this analysis. Retailers are always
        looking to optimize inventory and big tech companies are looking to make
        recommendations to consumers, and the results from this project would
        improve both parties’ marketing strategies. Most importantly, this
        analysis would help chefs and bakers guide their stories, recipes, and
        food jour- neys in their cookbooks to not only be authentic to
        themselves, but also bolster profitability. As such, these stakeholders
        would all be interested in funding this project.
      </p>
      <h4>2.5 Beneficiary Goals</h4>
      <p>
        This project is geared towards helping chefs and bakers guide their
        cookbook development journey to ensure the highest success. In this way,
        these beneficiaries will be able to access what makes a cookbook of
        their category, cuisine, style, and format most successful - and then
        they can pick and choose what to modify, if anything. There seems to be
        a strong market for this, with publishers writing posts about what makes
        a great cookbook and chefs surveying on- line forums with questions on
        what readers a looking for in a good cookbook [19, 20].
      </p>
      <p>
        Publishers and retailers would use this data and analysis to increase
        sales and profitability of their businesses. This data will help them
        choose which books to publish, sell, and market. This kind of analysis
        also runs the risk of more unique cookbooks that do not necessarily fit
        the format, style, and category recommendations brought forth by this
        project being rejected, thereby generalizing the kinds of cookbooks we
        see on the shelves. However, this is a risk that will appear years down
        the line, and with constant updates to the analysis with current sales
        data, this risk can be mitigated.
      </p>

      <h3> TECHNICAL DESIGN </h3>
      <p>
        The objective of this project is to develop a data-driven framework that
        analyzes historical and contemporary trends within the cookbook market
        in the U.S. to identify key factors that drive cook- book success.
        Through the use of big data techniques, such as NLP, machine learning,
        and time-series forecasting, this project strives to assess how cookbook
        content, format, cuisine, category, and release timing correlate (if at
        all) with sales performance. A predictive toolkit and interactive
        dashboard with this consolidated information would be invaluable for
        chefs, authors, publishers, and retailers to make informed decisions
        when creating, publishing, and marketing cookbooks.
      </p>

      <h4> 3.1 Datasets and Frameworks </h4>
      <p>
        The datasets for this project will come from various sources and have
        different features, as described in Table 1. The sales data from Amazon
        will be periodically updated - either weekly or monthly - and new
        cookbook metadata and con- tent will be added quarterly (4 times per
        year). Once the cookbook metadata and content are in the database,
        however, they will remain static.
      </p>
      <div className="table-container">
        <table className="dataset-table">
          <thead>
            <tr>
              <th>Dataset</th>
              <th>Features</th>
              <th>Source</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cookbook Metadata</td>
              <td>
                Title, author, format, cuisine, category, page count, release
                date
              </td>
              <td>Google Books API</td>
            </tr>
            <tr>
              <td>Cookbook Content (Text)</td>
              <td>Recipes, narrative sections, writing style, language</td>
              <td>Project Gutenberg and purchased cookbooks</td>
            </tr>
            <tr>
              <td>Sales Data</td>
              <td>Weekly/monthly sales figures, ranking, price, platform</td>
              <td>Amazon Product Advertising API</td>
            </tr>
          </tbody>
        </table>
        <p className="table-caption">
          <strong>Table 1:</strong> Datasets and associated features
        </p>
      </div>
      <h4>Big Data Techniques</h4>
      <p>
        The cookbook acquisition and content analysis will likely be the most
        expensive, both in terms of analysis and actual acquisition of the
        books. If the cookbooks are not available on Project Gutenberg, they
        will have to be purchased and then uploaded to the Google Cloud Storage
        buckets. NLP will be a large effort as part of this project for cookbook
        content (text) analysis. Google’s Bidirectional Encoder Representations
        from Transformers (BERT) will be used as the model to analyze cookbook
        text and perform classification of the books by styles, themes, and
        genres [16]. For examples, some cookbooks lean more heavily on the
        story-telling aspect whereas others are more technique and instruction
        driven (or both).
      </p>
      <p>
        For the sales data, the goal is to perform time-series forecasting using
        Long Short-Term Memory (LSTM), which is a popular and credible method to
        analyzing time-related data [17]. Based off of historical sales data,
        seasonal sales trends can be derived to predict peak cookbook sales
        periods and performance dips. The Amazon Product Advertising API and web
        scraping methods can be used here [15].
      </p>
      <p>
        Cookbook metadata will be ingested via the Google Books API using python
        scripts and API calls, as noted in the documentation [14].
      </p>
      <p>
        The cookbook metadata can then be used to find possible correlations
        between this sales data and the cookbook cuisine, category, page count,
        release date, etc. Multivariate regression models can be used to
        quantify the interactions and correlations between the aforementioned
        variables. As such, questions such as ”Given a cookbook that is in
        e-book format, released in Q4, and has Moroccan cuisine, how many units
        are likely to sell?”
      </p>
      <h4> 3.3 Infrastructure</h4>
      <p>
        As previously mentioned, a cloud computing platform is a necessity here
        for the volume and velocity of the data used for analysis. GCP is
        reputable for its ability to store large volumes of raw and processed
        data, managed services, and integration abilities with various tools.
        Therefore, Google Cloud Storage and BigQuery will be used to host the
        datasets in buckets and perform fast, SQL-based queries. Google Cloud
        Storage will be used to store raw and processed data, such as the data
        outlined in Figure 1.
      </p>

      <p>
        <div style={{ display: "flex", justifyContent: "right" }}>
          <div style={{ height: 700, width: 800 }}>
            <Flowchart />
          </div>
        </div>
        <p
          className="table-caption"
          style={{ justifyContent: "center", textAlign: "center" }}
        >
          <strong>Figure 1:</strong> Proposed infrastructure and data flow
          diagram.
        </p>
        To perform the computations and implement the machine learning methods,
        GCP with Dataproc for Apache Spark and Vertex AI will be used,
        especially to perform the text and time-series analyses using BERT for
        NLP tasks and LSTM for sales forecasting. In this way, all of the model
        versions can have a central location for pipeline management.
      </p>
      <p>
        This project requires data ingestion from multiple sources and has
        recurrent tasks such as the refreshing of sales and book data
        periodically. Additionally, the use of machine learning techniques for
        the text analysis and sales forecasting, it is important to retain model
        training pipelines. With such varied data dependencies and complex
        workflows, Apache Airflow is required to ensure such tasks run in the
        right order, automate the retrying of failed tasks, and provide a visual
        interface to monitor all of the workflows. Apache Airflow will manage
        and automate complex ETL workflows (Extract, Transform, Load) and ML
        pipelines. The Directed Acyclic Graph (DAG) structure of the tool
        ensures that tasks like data ingestion, model training, and dashboard
        updates run in the correct order. Airflow can also be integrated with
        Python scripts and GCP, which would be beneficial given the proposed
        infrastructure and processes. [18]
      </p>
      <p>
        For the final visualization for the end user, Looker Studio by Google
        can be utilized to build a dynamic, visual dashboard for the cookbook
        analysis. This can be easily integrated within the GCP ecosystem and can
        plug directly to BigQuery, Cloud Storage, and Vertex notebook
        predictions. This way, non-technical users can still interact with the
        dashboard and query the data with dropdown and selection menus. [18]
      </p>
      <h4>3.4 Final Product</h4>
      <p>
        The idea for the final product for the end user is to have an inter-
        active web-based dashboard with a predictive toolbox. In this way, the
        user can be provided with visual analytics for sales trends over time
        per the filters of their choosing. Such filters will include cuisine,
        format, and release timing among others mentioned in this report,
        thereby arming the user with customized cookbook success
        recommendations.
      </p>
      <p>
        The dashboard will have a few key components and features. Firstly,
        there will be a time series chart that shows sales across a
        user-specified time frame (years, months, etc.). The user will be able
        to filter by format (ebook, hardcover, etc.), cuisine (Indian, Vegan,
        Desserts, etc.), and category of cookbooks (instructional, narrative,
        technique-heavy, etc.). The sale predictions provided will show the
        models used and a breakdown of which features contributed to the
        analysis.
      </p>
      <p>
        The user will also have access to the style and content classifier which
        will show them the tendencies and performance of certain writing styles
        and tones. In addition, there will be a chart showing the months with
        the best performance (by number of sales) by category of cookbook to
        inform beneficiaries of optimal release timing.
      </p>
      <p>
        In future iterations, the dashboard can also host a regional popularity
        map that show top-selling cookbooks by U.S. cities and states for
        marketing purposes. Expanding this idea to a global scale will also be
        included in next steps.
      </p>
    </div>
  );
}

function Flowchart() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <ReactFlowProvider>
        <ReactFlow nodes={nodes} edges={edges} fitView />
      </ReactFlowProvider>
    </div>
  );
}

export default Gedanken;
export { Flowchart }; // named export
