import withDataSource from "./withDatasource";

const Card = ({ url, logo, name }) => (
  <div className="card col-md-4 mr-3">
    <img src={logo} className="card-img-top" alt={name} />
    <div className="card-body">
      <p class="card-text">
        <a href={url} target="_blank">
          {name}
        </a>
      </p>
    </div>
  </div>
);

const Grid = ({ items }) => (
  <div className="d-flex justify-content-center" style={{ width: "100%" }}>
    {items.map((value) => {
      return <Card {...value} kry={value.name} />;
    })}
  </div>
);

export default withDataSource(Grid);
