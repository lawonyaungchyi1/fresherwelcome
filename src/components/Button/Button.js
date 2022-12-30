import { Link } from "@mui/material";
import { red } from "@mui/material/colors";

const Button = () => {
  // <iframe src="" width="640" height="2532" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
  return (
    <Link
      href="https://docs.google.com/forms/d/e/1FAIpQLSc05twfWTKL2iG1FDeECYNWnrYlbBYBU9GgVQDOf1KPLNzIkw/viewform?embedded=true"
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
