from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import TfidfVectorizer

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load dataset
df = pd.read_csv('./YoutubeDataset.csv')

# Video recommendation route
@app.route('/recommend', methods=['POST'])
def recommend():
    data = request.get_json()
    query = data.get('query', '')

    if not query:
        return jsonify({'error': 'Query not provided'}), 400

    # Use TF-IDF and cosine similarity to recommend videos
    tfidf = TfidfVectorizer(stop_words='english')
    tfidf_matrix = tfidf.fit_transform(df['title'] + ' ' + df['description'])
    query_vec = tfidf.transform([query])
    similarity = cosine_similarity(query_vec, tfidf_matrix).flatten()

    # Get top 10 videos
    top_indices = similarity.argsort()[-10:][::-1]
    recommended_videos = df.iloc[top_indices]

    # Prepare the response with iframe links
    response = []
    for index, row in recommended_videos.iterrows():
        response.append({
            'v_title': row['title'],  # Ensure this key matches in the React code
            'v_iframe': row['iframe']  # Ensure this key matches in the React code
        })
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
