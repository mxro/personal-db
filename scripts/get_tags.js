/* gql query:
query { 
  tags {
    Tag
  }
}
*/

let data = {
  "data": {
    "tags": [
      {
        "Tag": "Beautiful Words"
      },
      {
        "Tag": "Winter"
      },
      {
        "Tag": "Summer"
      },
      {
        "Tag": "Inspirational"
      },
      {
        "Tag": "Self Control"
      },
      {
        "Tag": "Happiness"
      },
      {
        "Tag": "Blues"
      },
      {
        "Tag": "Writing"
      },
      {
        "Tag": "Immortality "
      },
      {
        "Tag": "Philosophy"
      },
      {
        "Tag": "Death"
      },
      {
        "Tag": "Stress"
      },
      {
        "Tag": "Psychology"
      },
      {
        "Tag": "Funny"
      },
      {
        "Tag": "Good Writing"
      },
      {
        "Tag": ""
      },
      {
        "Tag": "Romatic"
      },
      {
        "Tag": "Habits"
      },
      {
        "Tag": "Enlightenment"
      },
      {
        "Tag": "Loss"
      },
      {
        "Tag": "Love"
      },
      {
        "Tag": "Friendship"
      },
      {
        "Tag": "Empathy"
      },
      {
        "Tag": "Forgiveness"
      },
      {
        "Tag": "Marketing"
      },
      {
        "Tag": "Business"
      },
      {
        "Tag": "Innovation"
      },
      {
        "Tag": "Risk"
      },
      {
        "Tag": "Science"
      },
      {
        "Tag": "Scientific Method"
      },
      {
        "Tag": "Research Methodology"
      },
      {
        "Tag": "Project Management"
      },
      {
        "Tag": "Business Strategy"
      },
      {
        "Tag": "HR"
      },
      {
        "Tag": "Positive Thinking"
      },
      {
        "Tag": "Success"
      },
      {
        "Tag": "Improvisation"
      },
      {
        "Tag": "Collaboration"
      },
      {
        "Tag": "Politics"
      },
      {
        "Tag": "Corruption"
      },
      {
        "Tag": "Communication"
      },
      {
        "Tag": "Rhetoric"
      },
      {
        "Tag": "Leadership"
      },
      {
        "Tag": "Power"
      },
      {
        "Tag": "Productivity"
      },
      {
        "Tag": "Autonomy"
      },
      {
        "Tag": "Creativity"
      },
      {
        "Tag": "Crime"
      },
      {
        "Tag": "Influence"
      },
      {
        "Tag": "Strategy"
      },
      {
        "Tag": "War"
      },
      {
        "Tag": "Favorites"
      },
      {
        "Tag": "Decision Making"
      },
      {
        "Tag": "Business Process"
      },
      {
        "Tag": "Focus"
      },
      {
        "Tag": "Future"
      },
      {
        "Tag": "Negotiation"
      },
      {
        "Tag": "China"
      },
      {
        "Tag": "Education"
      },
      {
        "Tag": "Learning"
      },
      {
        "Tag": "Identity"
      },
      {
        "Tag": "Morality"
      },
      {
        "Tag": "Change"
      },
      {
        "Tag": "Better World"
      },
      {
        "Tag": "Virtue"
      },
      {
        "Tag": "Buddhism"
      },
      {
        "Tag": "USA"
      },
      {
        "Tag": "Technology"
      },
      {
        "Tag": "Children"
      },
      {
        "Tag": "Cosmos"
      },
      {
        "Tag": "Truth"
      },
      {
        "Tag": "Art"
      },
      {
        "Tag": "Problem"
      },
      {
        "Tag": "Wisdom"
      },
      {
        "Tag": "Economy"
      },
      {
        "Tag": "Temperance"
      },
      {
        "Tag": "Beauty"
      },
      {
        "Tag": "Knowledge"
      },
      {
        "Tag": "Emotions"
      },
      {
        "Tag": "Wealth"
      },
      {
        "Tag": "Health"
      },
      {
        "Tag": "Freedom"
      },
      {
        "Tag": "Passion"
      },
      {
        "Tag": "Complexity"
      },
      {
        "Tag": "Solitude"
      },
      {
        "Tag": "Question"
      },
      {
        "Tag": "Mindfulness"
      },
      {
        "Tag": "Russia"
      },
      {
        "Tag": "Management"
      },
      {
        "Tag": "Agile"
      },
      {
        "Tag": "Music"
      },
      {
        "Tag": "Metrics"
      },
      {
        "Tag": "Design"
      },
      {
        "Tag": "Ignorance"
      },
      {
        "Tag": "Flow"
      },
      {
        "Tag": "Mastery"
      },
      {
        "Tag": "Big Data"
      },
      {
        "Tag": "Investment"
      },
      {
        "Tag": "Uncertainty"
      },
      {
        "Tag": "Organisational Culture"
      }
    ]
  }
};

const tags = data.data.tags;

for (tag of tags) {

  console.log(tag['Tag']);
}