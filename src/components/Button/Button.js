import { Link } from "@mui/material";
import { red } from "@mui/material/colors";

const Button = () => {
  return (
    <Link
      href="https://docs.google.com/forms/d/e/1FAIpQLSd-gobfKu_uWXNiaEdXZbiLMxwMryIZxIeYGwtjQ6ZW7wjoEw/viewform"
      color={red[50]}
    >
      <div
        style={{
          background: "#ed4758",
          textAlign: "center",
          color: "#fafafa",
          borderRadius: "10px",
          fontWeight: "bolder",
          padding: "10px",
          cursor: "pointer",
          margin: "8%",
        }}
      >
        Votingပေးရန်နှိပ်ပါ
      </div>
    </Link>
  );
};

export default Button;
