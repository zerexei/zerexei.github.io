import Card, { CardType } from "../../../components/Card";
import Section from "../../../components/Section";

import articles from "../../../data/articles.json";

const Articles = () => {
  return (
    <Section
      title="Articles"
      moreItemsUrl="https://medium.com/@angeloarcillas64"
    >
      {articles.map((article: CardType) => {
        return (
          <Card
            key={article.id}
            name={article.name}
            description={article.description}
            url={article.url}
            tags={article.tags}
          />
        );
      })}
    </Section>
  );
};

export default Articles;
