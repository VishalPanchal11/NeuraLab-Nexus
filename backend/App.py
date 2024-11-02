from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import TfidfVectorizer

app = Flask(__name__)
# Configure CORS
cors = CORS(app, origins='*')

# Load dataset
df = pd.read_csv('./YoutubeDataset.csv')
print("Dataframe loaded:", df.head())

# Video recommendation route
@app.route('/recommend', methods=['POST'])
def recommend():
    print("Received request:", request.json)  # Log the incoming request
    data = request.get_json()
    query = data.get('query', '')

    if not query:
        return jsonify({'error': 'Query not provided'}), 400

    # Use TF-IDF and cosine similarity to recommend videos
    tfidf = TfidfVectorizer(stop_words='english')
    # Concatenate title and description for the recommendation engine
    tfidf_matrix = tfidf.fit_transform(df['v_title'] + ' ' + df['v_description'])
    query_vec = tfidf.transform([query])
    similarity = cosine_similarity(query_vec, tfidf_matrix).flatten()

    # Get top 10 videos
    top_indices = similarity.argsort()[-10:][::-1]
    recommended_videos = df.iloc[top_indices]

    # Prepare the response with iframe links and other video info
    response = []
    for _, row in recommended_videos.iterrows():
        response.append({
            'v_title': row['v_title'],
            'v_description': row['v_description'],
            'v_iframe': row['v_iframe'],
            'v_date': row['publishedDate'],
            'viewCount':row['viewCount'],
            'likeCount':row['likeCount']  # Including published date
        })
    return jsonify(response)

if __name__ == '__main__':
    app.run(port=5011, debug=True)
