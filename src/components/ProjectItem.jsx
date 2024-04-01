function ProjectItem({ image, name, id, skills }) {
  const handleRedirect = (id) => {
    if (id === 0) {
      window.location.href =
        "https://torfirst.github.io/recipe-drink-api-proj/";
    }
    if (id === 1) {
      window.location.href =
        "https://yourecancelled-4aa25f1b6285.herokuapp.com/";
    }
    if (id === 2) {
      window.location.href = "https://birbtopia-4joq.onrender.com/";
    }
    if (id === 2) {
      window.location.href = "https://birbtopia-4joq.onrender.com/";
    }
    if (id === 3) {
      window.location.href =
        "https://garrettgonzo.github.io/Horiseon-Website-Build/";
    }
    if (id === 4) {
      window.location.href =
        "https://garrettgonzo.github.io/My-Coding-Portfolio/";
    }
    if (id === 5) {
      window.location.href =
        "https://garrettgonzo.github.io/Create-a-BETTER-Password/";
    }
    if (id === 6) {
      window.location.href =
        "https://garrettgonzo.github.io/Test-Your-Coding-Knowledge/";
    }
    if (id === 7) {
      window.location.href =
        "https://garrettgonzo.github.io/Create-your-Daily-Schedule/";
    }
    if (id === 8) {
      window.location.href =
        "https://garrettgonzo.github.io/Whats-the-Weather-like-in-America/";
    }
    if (id === 9) {
      window.location.href = "https://www.youtube.com/watch?v=_4P9iIY-pA0";
    }
    if (id === 10) {
      window.location.href = "https://www.youtube.com/watch?v=22keyrmrrqc";
    }
    if (id === 11) {
      window.location.href = "https://www.youtube.com/watch?v=NA31JZ-w2Q0";
    }
    if (id === 12) {
      window.location.href = "https://www.youtube.com/watch?v=QY3H-DJMGpk";
    }
    if (id === 13) {
      window.location.href = "https://www.youtube.com/watch?v=nFF8YnDa4sY";
    }
    if (id === 14) {
      window.location.href = "https://a-great-text-editor.onrender.com/";
    }
  };
  return (
    <div className="projectItem" onClick={() => handleRedirect(id)}>
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
      <h2> {skills} </h2>
    </div>
  );
}

export default ProjectItem;
