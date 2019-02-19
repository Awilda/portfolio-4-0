import React, { Component } from 'react'

class Projects extends Component {
  render () {
    return <div className='Projects slide'>
      <h4> My Projects </h4>
      <div className="projectsContainer">
      <div className='projectBox'>
        <a href='http://merrittengineering.com/' target="_blank"><img src='../merritt.png'  /></a>
        <p className="project_text"><span>Built a search bar and newsletter pop-up feature onto an existing WordPress site using jQuery and Less.  </span>
        <a href='http://merrittengineering.com/' target='_blank'>View website. </a></p>
      </div>
      <div className='projectBox'>
        <a href='http://www.nycbuildsbio.org/' target="_blank"><img src='../buildsbio.png'  /></a>
        <p className="project_text"><span>A multi-level website created by a team of 2 in less than 2 weeks. Built with WordPress, PHP, jQuery, and Less. </span>
        <a href='http://www.nycbuildsbio.org/' target="_blank">View website. </a></p>
      </div>
      <div className='projectBox'>
        <img src='../smacna_jotform.png'  />
        <p className="project_text"><span>Version 1 - An electronic payment form with info that gets imported to an existing Access database. Built on JotForm with JotForm API, PHP, CSS, VBA. </span> 
        </p>
      </div>
      <div className='projectBox'>
        <img src='../smacna_portal.png'  />
        <p className="project_text"><span>Version 2 - A user portal with access to an electronic payment form, payment history and reports. Built on Angular. Focused on reports using migrated Access database and SQL.</span>
        </p>
      </div>
      <div className='projectBox'>
        <img src='../aoa_html.png'  />
        <p className="project_text"><span>Programmed a responsive HTML template for monthly marketing emails. </span>
        </p>
      </div>
      </div>
    </div>
  }
}

export default Projects
