import {
  Container,
  SideMenu,
  Content
} from './styles'

import {AiFillGithub, AiFillLinkedin, AiOutlineMail, AiFillInstagram} from 'react-icons/ai'
import { FcDocument } from 'react-icons/fc'

interface ContactMeProps {
  showTitle: boolean
}

function ContactMe({ showTitle }: ContactMeProps)  {
  return (
    <div className="follow-me">
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/joseluizsborges/">
        <AiFillLinkedin size="1.5rem" />
        {showTitle && 'linkedin.com/in/joseluizsborges/'}
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/shpsyte">
          <AiFillGithub size="1.5rem" />
          {showTitle && 'github.com/shpsyte'}
        </a>
        <a target="_blank" rel="noreferrer" href="https://instagram.com/joseluizwa/">
          <AiFillInstagram size="1.5rem"/>
          {showTitle && 'instagram.com/joseluizwa/'}
        </a>
        <a target="_blank" rel="noreferrer" href="mailto:jose.iscosistemas@gmail.com">
          <AiOutlineMail size="1.5rem"/>
          {showTitle && 'jose.iscosistemas@gmail.com'}
        </a>
        <a target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1VweJ3Lm7_WNSLfFX-WwIXqahT8pmLiavwO1BkDTJXPw/edit#">
          <FcDocument size="1.5rem"/>
          {showTitle && 'My Resume'}
        </a>
    </div>
  )
}

export function Home() {
  return (
    <Container>
      <SideMenu>
        <div className="avatar-container">
          <div className="avatar">
            <img src="https://avatars.githubusercontent.com/u/3891610?v=4" alt="" />
            <span>Luiz, J.</span>
          </div>
          <div className="follow-me">
            <ContactMe showTitle={false} />
          </div>
        </div>
        <div className="other">
          <span>Location</span>
          <span>Vancouver, Canada</span>
        </div>
        <div className="other">
          <span>Time Zone</span>
          <span>Pst -07:00</span>
        </div>
        <div className="other">
          <span>Industries</span>
          <span>Startup, Recruitment, HR, Financial, E-commerce, ERP</span>
        </div>
        

      </SideMenu>
      <Content>
        <h1>About me</h1>
        <p>Hi, I’m Luiz, a full-stack engineer from Brazil who has a passion for building IT solutions and helping companies expand, plan, and succeed. I’ve been working with software development for 15+ years, and I’m currently working as a tech-lead at Vanhack Technologies in Canada.</p>
        
        <p>I've been coding web-based software using <strong>React.JS, HTML5 and CSS3,</strong> along with <strong>C# .Net Core, Entity Framework </strong> all linked to a <b>SQL Server</b> database.</p>
        
        <p>I love Coaching, Hiking and Camping! I genuinely believe in creating results through people, so Self-Development, Positivism, Motivational Matters are things I get into.</p>
        
        <p>Some tech I am confortable with:</p>
        <ul>
          <li>React.Js:  <b>(2 years)</b></li>
          <li>HTML5, CSS3: <b>(2 years)</b></li>
          <li>C#, .Net Core, Linq, Entity Framework:  <b>(5 years)</b> </li>
          <li>MS SQL Server: <b>(10+ years)</b></li>
        </ul>
        <span className="small">But I'm also worked with: NodeJS, Oracle, Asp.Net, MVC, Jquery</span>
        <h1 className="contact">Contact</h1>
        <p>You can find me on the social networks below. But I’m usually more active on <b>Linkedin!</b> :)</p>
        <ContactMe showTitle />
      </Content>
        
    </Container>
  )
}

