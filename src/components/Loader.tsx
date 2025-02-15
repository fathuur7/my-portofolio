import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress(); // Mengambil status progress dari useProgress

  return (
    <Html center>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#f1f1f1",
        fontSize: "16px",
        fontFamily: "Arial, sans-serif",
        background: "rgba(0, 0, 0, 0.8)",
        padding: "10px 20px",
        borderRadius: "8px"
      }}>
        <p>Loading...</p>
        <p>{progress.toFixed(2)}%</p>
      </div>
    </Html>
  );
};

export default CanvasLoader;
