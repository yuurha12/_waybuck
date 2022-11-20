import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Table, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import Approve from "../assets/images/icon/Approve.png";
import Cancel from "../assets/images/icon/Cancel.png";

const style = {
  textTitle: {
    fontWeight: "600",
    fontSize: "32px",
    lineHeight: "49px",

    color: "#BD0707",
  },

  bgColor: {
    backgroundColor: "#828282",
  },

  textCenter: {
    textAlign: "center",
  },

  link: {
    color: "#061E99",
    textDecoration: "none",
  },

  warning: {
    color: "#FF9900",
  },

  success: {
    color: "#78A85A",
  },

  danger: {
    color: "#E83939",
  },

  light: {
    color: "#00D1FF",
  },
};

function Income() {
    return (
      <Container className="mt-5">
        <h3 style={style.textTitle} className="mb-5">
          Income transaction
        </h3>
        <Table bordered hover>
          <thead>
            <tr style={style.bgColor}>
              <th>No</th>
              <th>Name</th>
              <th>Address</th>
              <th>Post Code</th>
              <th>Income</th>
              <th>Status</th>
              <th style={style.textCenter}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Sugeng No Pants</td>
              <td>Cileungsi</td>
              <td>16820</td>
              <td>
                <Link to="/Transaction" style={style.link}>
                  69.000
                </Link>
              </td>
              <td style={style.warning}>Waiting Approve</td>
              <td>
                <Stack
                  direction="horizontal"
                  gap={3}
                  className="justify-content-center"
                >
                  <Button
                    className="w-50 p-0"
                    size="sm"
                    style={{ border: "white", backgroundColor: "#FF0742" }}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="w-50 p-0"
                    size="sm"
                    style={{ border: "white", backgroundColor: "#0ACF83" }}
                  >
                    Approve
                  </Button>
                </Stack>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Haris Gams</td>
              <td>Serang</td>
              <td>42111</td>
              <td>
                <Link to="/Transaction" style={style.link}>
                  30.000
                </Link>
              </td>
              <td style={style.success}>Success</td>
              <td className="d-flex justify-content-center">
                <img alt="" src={Approve} className="sukses"/>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Aziz Union</td>
              <td>Bekasi</td>
              <td>13450</td>
              <td>
                <Link to="/Transaction" style={style.link}>
                  28.000
                </Link>
              </td>
              <td style={style.danger}>Cancel</td>
              <td className="d-flex justify-content-center">
                <img alt="" src={Cancel} />
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Lae Tanjung Balai</td>
              <td>Tanjung Balai</td>
              <td>21331</td>
              <td>
                <Link to="/Transaction" style={style.link}>
                  30.000
                </Link>
              </td>
              <td style={style.light}>On The Way</td>
              <td className="d-flex justify-content-center">
                <img alt="" src={Approve} className="setuju" />
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    );
  }
  
  export default Income;