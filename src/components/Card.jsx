export default function Card(props) {
  return (
    <article className="card">
      <img className="card--img" src={props.imageUrl} alt={props.title} />
      <div className="card--content">
        <div>
          <div className="card--content_heading">
            <div className="flex">
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.57866 5.25002C2.65532 5.25002 1.90837 4.50221 1.90837 3.57965C1.90837 2.65757 2.65532 1.90911 3.57866 1.90911C4.50167 1.90911 5.24927 2.65757 5.24927 3.57965C5.24927 4.50221 4.50167 5.25002 3.57866 5.25002M3.48394 0C1.54227 0 0 1.63678 0 3.65569C0 6.40791 2.95078 9.25191 2.95078 9.25191C3.34777 9.62783 3.59437 9.65847 4.01646 9.25191C4.01646 9.25191 7 6.40791 7 3.65569C7 1.63678 5.42544 0 3.48394 0"
                  fill="#F55A5A"
                />
              </svg>
              <span>{props.location.toUpperCase()}</span>
              <a href="">View On Google Maps</a>
            </div>
            <h2 className="mt-sm">{props.title}</h2>
          </div>
        </div>

        <div>
          <time className="bold">
            {props.startDate} - {props.endDate}
          </time>
          <p className="mt-sm">{props.description}</p>
        </div>
      </div>
    </article>
  );
}
