export default function Game(props) {
  const { name, released, image, rating } = props;

  return (
      <div className="uk-card uk-card-hover uk-margin">
        <div>
          <img src={image} alt={name} />
        </div>
        <div>
          <div className="uk-card-body">
            <h4 className="uk-card-title">{name}</h4>
            <span>{rating}</span>
            <p>{released}</p>
          </div>
        </div>
      </div>
  );
}
