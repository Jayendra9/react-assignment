import 'bootstrap/dist/css/bootstrap.min.css'
import "./Filter.css";
import { Container } from 'react-bootstrap'

const Dashboard = () => {
  return <div className="title"> 
    <Container>
      <div className='nav1'>
        <h1 >Basic Mathematics 101</h1>
      </div>  
      <div className="filter d-flex align-items-center">
        <div className="single-filter">
          <span className="filter-items pointer active">Classroom</span>
        </div>
        <div className="single-filter">
          <span className="filter-items pointer">Whiteboard</span>
        </div>
        <div className="single-filter">
          <span className="filter-items pointer">Videos</span>
        </div>
        <div className="single-filter">
          <span className="filter-items pointer">Slide Show</span>
        </div>
        <div className="single-filter">
          <span className="filter-items pointer">Documents</span>
        </div>
        <div className="single-filter">
          <span className="filter-items pointer">DocCam</span>
        </div>
        
        <div className="single-filter">
          <svg
            viewBox="0 0 16 13"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            class="style-scope yt-icon"
            style={{"width":"20px"}}
          >
            <g mirror-in-rtl="" class="style-scope yt-icon">
              <path
                d="M4.97,12.65L9.62,8L4.97,3.35l0.71-0.71L11.03,8l-5.35,5.35L4.97,12.65z"
                class="style-scope yt-icon"
              ></path>
            </g>
          </svg>
        </div>
    </div>
      <div class="ratio ratio-16x9">
        <iframe src="https://player.vimeo.com/video/883402169" title="YouTube video" allowfullscreen></iframe>
      </div>  
    </Container>
    
  </div>;
};

export default Dashboard;