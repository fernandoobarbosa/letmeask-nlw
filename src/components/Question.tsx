import "../styles/question.scss";

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
};

export function Question({ content, author }: QuestionProps) {
  return (
    <div className="question">
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt="" />
          <span>{author.name}</span>
        </div>
        <div>
          <button
            className="like-button"
            type="button"
            aria-label="Marcar como gostei"
          >
            <span>10</span>
          </button>
        </div>
      </footer>
    </div>
  );
}
