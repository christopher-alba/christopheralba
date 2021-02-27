const code = `.portfolio-div {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.portfolio-outer-div {
  padding-bottom: 100px;
}
.portfolio-landing {
  width: 100%;
  height: 50vh;
  background: black;
  margin-bottom: 100px;
  position:relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  overflow:hidden;
}
.portfolio-landing h1{
  position: relative;
  z-index: 10;
}
#titlecontent {
  position: absolute;
  top: 100%;
  animation: scroll 20s linear 4s infinite;
  color:white;
}
.language-css {
  color: white;
}
@keyframes scroll {
  0% {
    top: 100%;
  }
  100% {
    top: -500%;
  }
}
.portfolio-project-div img {
  max-width: 100%;
}
.portfolio-project-div {
  width: 322px;
  margin: 20px;
  position: relative;
}

.portfolio-hashtags {
  display: flex;
  flex-wrap: wrap;
}

.portfolio-hashtag {
  margin-right: 10px;
}

.portfolio-visit {
  position: absolute;
  top: 0px;
  right: 0px;
  border-radius: 0px;
  border-color: lightgray;
  background-color: rgba(27, 27, 27, 0);
  width: 100%;
  height: 164px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 500ms;
  opacity: 0;
}
.portfolio-visit:hover,
.portfolio-visit:focus {
  background-color: rgba(27, 27, 27, 0.445);
  font-size: 3rem;
  transition: 500ms;
  opacity: 1;
}
`;

export default code;
