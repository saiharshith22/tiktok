import { LayoutGrid, ListFilter } from "lucide-react";
import IconButton from "../icon-button/IconButton";
import { ButtonGroup } from "./styled.components";

const VideoHeader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "50px",
        alignItems: "center",
      }}
    >
      <span
        style={{
          color: "#1F2737",
          fontFamily: "Inter",
          fontSize: "22px",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "24px",
        }}
      >
        Videos
      </span>
      <ButtonGroup>
        <IconButton
          icon={<ListFilter />}
          label="Most Recents"
          backgroundColor="#ffffff"
          color="#4B5363"
          styles={{ borderRadius: "8px", border: "1px solid #D1D5DC" }}
        />
        <IconButton
          icon={<LayoutGrid />}
          label="Grid View"
          backgroundColor="#ffffff"
          color="#4B5363"
          styles={{ borderRadius: "8px", border: "1px solid #D1D5DC" }}
        />
      </ButtonGroup>
    </div>
  );
};

export default VideoHeader;
