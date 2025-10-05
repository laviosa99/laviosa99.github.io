import React from "react";
import "../App.css";

function ProjectB() {
  return (
    <div className="MainContent">
      <h1>Movie Rating Prediction with SGD and SVD</h1>
      <h4>Lavanya Bharani, Julie Wang</h4>
      <p>
        <strong>December 2024</strong>
      </p>
      <p>
        The objective of this project was to build a machine learning system
        that predicts which movie(s) a user will like. We explored two main
        approaches to predicting user ratings for movies: a custom SGD
        (stochastic Gradient Descent) model and a collaborative filtering model
        using SVD (Singular Value Decomposition) from the Surprise library.
      </p>
      <p>
        <strong>MovieLens 4k Dataset</strong>
      </p>
      <p>
        - 100,000 ratings (1-5 stars) from 943 users on 1682 movies.
        <br />
        - Each user has rated at least 20 movies.
        <br />
        - Some movies have ratings from only a few users.
        <br />
        - Ratings were collected on a 5-star scale. Each rating is one of 5
        possible integer values, 1, 2, 3, 4, or 5, with 5 being ‘best’ and 1
        being ‘worst’.
        <br />- Simple demographic info for the users (age, gender, etc.) are
        available
      </p>
      <p>
        <strong>Methods</strong>
      </p>
      <p>
        - Custom SGD Model
        <br />- Collaborative Filtering with SVD from Surprise library
      </p>
      <p>
        <strong>Performance Metric</strong>
      </p>
      <p>
        Mean Absolute Error (not overly sensitive to outliers and highly
        understandable)
      </p>
      <h3>SGD Model Results and Analysis</h3>
      <p>
        <strong>SGD Model with α = 0</strong>{" "}
      </p>
      <img src="ProjectBFigure1.png" />
      <p>
        <strong>Figure 1:</strong> Trace plots for Mean Absolute Error (MAE) vs.
        Epoch when α = 0 for K = 2,10, 50 (left to right).
      </p>
      <p>
        For each K value (2, 10, 50), we used the following parameters:
        <br />
        - Number of epochs: 50
        <br />
        - Batch size: 250
        <br />- Step size: 0.1
      </p>
      <p>
        The number of epochs, batch size, and step size were adjusted to the
        final values listed above such that the training MAE showed convergence
        over the number of epochs for this
        <strong>Stochastic Gradient Descent (SGD) model</strong>. Here, we
        varied the K parameter, which represents the number of factors or
        dimensions the model needs to learn per vector spae. As K increases,
        model complexity also increases. Each of the K values deomnstrated very
        similar MAEs, as evident in Figure 1.
        <strong>Convergence behavior (around 0.94 MAE at epoch 50)</strong>
        appears nearly identical for K = 2, 10, and 50. There also are no local
        minima for each of the plots and each looks convex. It is possible that
        the model is not complex enough for the data. There are no obvious signs
        of overfitting as the validation curve follows the training curve very
        closely (no large gap).
      </p>
      <p>
        <strong>SGD Model with L2 Regularization</strong>
      </p>
      <img src="ProjectBFigure2.png" />
      <p>
        <strong>Figure 2:</strong> Trace plot for MAE vs. Epoch when K = 50 with
        the best α of 5.26.
      </p>
      <p>
        For α with K=50, we used the following parameters:
        <br />
        - Number of epochs: 50
        <br />
        - Batch size: 250
        <br />- Step size: 0.1
      </p>
      <p>
        For SGD with K=50 with L2 regularization, the model was trained with
        varying levels of regularization strength, α, to assess the impact on
        convergence and validation error. We used{" "}
        <strong>0 evenly-spaced values from 10e-6 to 100 for alpha.</strong> The
        model with the lowest validation error (0.938204 MAE) at the final epoch
        was selected as the <strong>‘best alpha’ with α=5.26.</strong>
      </p>

      <p>
        <strong>Results for Validation and Test Sets</strong>
      </p>
      <p>
        <strong>Table 1:</strong> Validation vs Test MAE per K value.
      </p>
      <img src="ProjectBTable1.png" />
      <p>
        Table 1 reports the MAE for the validation and test sets for the ‘best
        version’ of each model. Here, the ‘best version’ of each model was
        selected based on the model that achieved the lowest MAE. For each value
        of K, the model was trained on the training set and evaluated on the
        validation set. The validation MAE in the table above K Validation MAE
        Test MAE 2 0.938207 0.939013 10 0.938208 0.939005 50 0.938192 0.939011
        represents the value that the model converged to, which also corresponds
        to the lowest validation MAE. This also further indicates that there is
        no overfitting with our model. The test MAE was then computed using the
        parameters from the last epoch.
      </p>
      <p>
        Overall, as K increased, the validation MAE stayed consistent around
        0.938. However, the model with K=50 had a marginally better MAE compared
        to K=2 or K=10 with an MAE of 0.938192. The test MAE for K=50 was
        similar - 0.939011. Although K=50 has the lowest validation MAE, the
        performance of K=2 and K=10 are extremely competitive. Due to this
        negligible difference,{" "}
        <strong>
          K=2 was chosen for simplicity because it offers similar results for
          lower model complexity.{" "}
        </strong>{" "}
        Attempting models with K larger than 50 is not worthwhile because of the
        marginal improvements we saw with increased model complexity from K=2 to
        K=10 to K=50.
      </p>

      <h3>SVD Model Results and Analysis</h3>
      <p>
        <strong>Surprise library's SVD Model </strong>{" "}
      </p>
      <p>
        To predict user ratings for movies, we implemented a collaborative
        filtering approach using the Surprise library’s SVD (Singular Value
        Decomposition) algorithm. Because SVD allows us to find latent
        representations of both users and items, it effectively captures
        relationships between users and movies, even with how sparse the dataset
        is. It thus uses these learned relationships to make accurate
        predictions for unrated movies. Also, in the Surprise library’s
        documentation, SVD was displayed to have one of the lowest mean absolute
        errors (MAE) on the dataset we were using.
      </p>
      <p>
        We began by parsing the training dataset with the Surprise library’s
        Reader class to format it for understanding our rating scale. Then, we
        used a grid search to search over the hyperparameters of the number of
        latent factors, the learning rate, and a regularization term to optimize
        the model’s performance. We tested{" "}
        <strong>
          5 linearly spaced latent factors(n_factors) in the range 100 to 200
          (100, 120, 140, 160)
        </strong>{" "}
        to control the model's complexity. We tested{" "}
        <strong>
          6 values of learning rates(lr) in a logarithmic range from 0.01 to
          0.05
        </strong>{" "}
        to optimize convergence. We tested{" "}
        <strong>
          6 log-spaced regularization terms (reg) from 0.01 to 0.5
        </strong>{" "}
        to prevent overfitting. We used 5-fold-cross-validation to fine tune our
        parameters, and determined the best combination by minimizing the MAE on
        the validation set. The{" "}
        <strong>
          best parameters included 160 latent factors, a learning rate of
          roughly 0.01904, and a regularization term strength of around 0.1046.
        </strong>
      </p>
      <p>
        <strong>SVD Model Training and Complexity</strong>
      </p>
      <img src="ProjectBFigure3.png" />
      <p>
        <strong>Figure 3: </strong>Hyperparameter plots with varying lr
        (learning rate) and reg (regularization), mean MAE vs number of
        factors.{" "}
      </p>
      <p>
        The best hyperparameters (red outline in Figure 3) for latency, learning
        rate, and regularization based on the results from GridSearchCV are:
        <br />
        - 'n_factors': 160
        <br />- 'lr_all': 0.019
        <br />- 'reg_all': 0.1046
      </p>
      <p>
        The above hyperparameter values were assigned to be the 'best' because
        they resulted in the lowest mean MAE of 0.7248 (also from
        GridSearchCV).{" "}
      </p>
      <p>
        <strong>SVD Model Performance</strong>
      </p>
      <p>
        <strong>Table 2: </strong>Mean absolute error for our best SVD model on
        the validation (test split of the development set) and test
        (leaderboard) datasets.
      </p>
      <img src="ProjectBTable2.png" />

      <p>
        <strong>SVD Error Analysis</strong>
      </p>
      <p>
        We created the following models by training our chosen model on 80% of
        the dataset, and evaluating its performance on the remaining 20%. It
        also drew information from movie_info.csv and user_info.csv.
      </p>
      <p>
        <strong>Table 3: </strong>MAE of predictions by user gender.
      </p>
      <img src="ProjectBTable3.png" />
      <p>
        <strong>Table 4: </strong>MAE of predictions by user age.
      </p>
      <img src="ProjectBTable4.png" />
      <p>
        <strong>Table 5: </strong>MAE of predictions by movie release year.
      </p>
      <img src="ProjectBTable5.png" />
      <p>
        Our internal validation MAE outperformed our internal validation by
        roughly 0.1034. The worse performance on the leaderboard dataset could
        be attributed to different distribution of users and movies as compared
        to our training and validation set. The lower performance to the unseen
        test dataset for the leaderboard could indicate some overfitting to the
        training dataset.
      </p>
      <p>
        Our best SGD model with L2 regularization from Problem 1 used a
        regularization hyperparameter of
        <strong>
          α=5.26 and K=50 resulted in a validation MAE of 0.938204.
        </strong>{" "}
        Comparatively, our SVD model outperformed the SGD model with{" "}
        <strong>a validation MAE of 0.7248</strong> The SGD model utilizes an
        iterative approach to learn latent factors, and the performance is
        dependent on parameters such as step size, batch size, learning rate,
        etc. making it challenging to be consistent with new data and avoid
        overfitting to the training set. Just per the validation MAE for each
        method, it is evident that the SVD model from Surprise generalizes
        better to new data compared to the SGD + L2 regularization method in
        Problem 1. SVD executes regularization by focusing on the most important
        or top singular values to create a lower-dimensional representation of
        the data.
      </p>
      <p>
        Our SVD model shows a higher MAE with males than females. Though there
        were more data points available in training and validation for males
        than females (at least twice as many male users, and much more male
        ratings), males had a higher MAE. This can demonstrate how gender does
        not have a large relationship with individual movie ratings. MAE
        predictions by user age and movie release year also showed great
        variation, which could be because we did not use this supplementary
        information to train our model. However, we can notice that there are
        greater MAEs associated with younger ages, such as 10, 11, or 14, with
        users aged 10 having MAEs of up to 1.5. This discrepancy might indicate
        that younger users tend to rate movies differently compared to other age
        groups. Meanwhile, older audiences may be more open to all genres. In
        movie years, older movies had slightly better MAE scores. However, this
        may be because of less data points available. For example, the movie
        release year of 1926 has the lowest MAE score of 0.018921 and only has
        one data point in the training set. There is not enough data for 1926 to
        draw meaningful conclusions, which could be an issue across older
        movies.
      </p>
      <p>
        <strong>Future Work</strong>
      </p>
      <p>
        Other methods we had considered but did not finalize included using the
        Surprise library’s SVD++ algorithm, which showed to perform slightly
        better based on MAE score on the data_movie_lens_100k dataset. We tried
        the SVD++ model when we were testing fewer hyperparameters, and it did
        slightly perform better, but we lacked sufficient time to test it fully
        as it took longer to run. Additionally, we would have liked to
        incorporate the user-specific information from user_info.csv, and the
        movie-specific features from movie_info.csv. We attempted incorporating
        this data very briefly, but because of constraints we ran into with the
        Surprise library, we were unable to implement this in the time given.
      </p>
      <p>
        In future work, we would also explore ensemble methods that combine
        multiple recommendation algorithms. This would leverage the best
        qualities of several models to deliver a more accurate prediction by
        offsetting weaknesses of the models combined. This method would also
        capture the complexity of this dataset and improve the generalization.
      </p>
    </div>
  );
}

export default ProjectB;
