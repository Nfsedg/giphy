import { Link } from "wouter";

export default function Category({ name, options = [] }) {
    return (
      <section>
        <h1>{name}</h1>
        <ul>
          {options.map((singleOption, index) => (
            <li
              key={singleOption}
              index={index}
              type='primary'
            >
              <Link to={`/gif/${singleOption}`}>
                {singleOption}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    );
  }