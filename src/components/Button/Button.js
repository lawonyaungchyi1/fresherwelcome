import { Link } from "@mui/material";
import { red } from "@mui/material/colors";

const Button = () => {
  return (
    <Link
      href="https://l.facebook.com/l.php?u=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSfFvtNGCBhKS5ODh9b50kXjB6Wr7ROVLWKFGFVaXBb7rbqqfQ%2Fviewform%3Fusp%3Dsf_link%26fbclid%3DIwAR2AgQAzKYA9ZaEOJLN73fADk9AS-UO2g-Ew8KsmM7chGYKZ5JElRAYolEg&h=AT3v5v-PrKT4_3jdQS54kIui5hcj96mAOAXrtLaTP4Bh0fsVKu2T-sMKin_jUjZW41aqbL-BZpGh8iGrHvODB63khbviQNPYserjlmcow8MLDuZpFEJCt3waNOgd-pOpDo3JVA"
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
