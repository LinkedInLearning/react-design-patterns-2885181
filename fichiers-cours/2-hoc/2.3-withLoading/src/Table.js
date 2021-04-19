import withDataSource from "./withDataSource";
import withLoading from "./withLoading";

const Row = ({ url, logo, name }) => (
  <tr>
    <td scope="row">
      <img
        src={logo}
        style={{ width: "20%" }}
        className="card-img-top"
        alt={name}
      />
    </td>
    <td style={{ verticalAlign: "middle" }}>
      <a href={url} target="_blank">
        {name}
      </a>
    </td>
  </tr>
);

const Table = ({ items }) => (
  <table className="table table-dark">
    <tbody>
      {items.map((value) => {
        return <Row {...value} />;
      })}
    </tbody>
  </table>
);

const TableWithLoading = withLoading(Table);
export default withDataSource(TableWithLoading);
