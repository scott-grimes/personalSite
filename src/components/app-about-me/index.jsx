import React from 'react';

export default function AboutMe(props) {
	return (
		<div className="about-me-app">
			<h3>
				About <span className="about-me-light">Me</span>
			</h3>
			<div className="about-me-content">
				<p>
					Welcome to my website. My name is Scott Grimes
					and I'm a software engineer living in Austin TX.
					I use a lot of different technologies in my day-to-day life, particularly:
				</p>
				<ul>
					<li>React</li>
					<li>Redux</li>
					<li>Webpack</li>
					<li>Babel</li>
					<li>Less</li>
				</ul>
				<p>
					In my freetime I enjoy
					<ul>
					<li>x</li>
					<li>y</li>
					<li>z</li>
				</ul>
				</p>
				<p>
					If you would like to contact me I can be reached at:
				</p>
				<ul>
					<li>
						<a href="mailto:scottgrimes89@gmail.com">
							scottgrimes89@gmail.com
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/scottgrimes89/"
							target="blank"
						>
							my Linkedin profile
						</a>
					</li>
					<li>
						<a
							href="https://github.com/scott-grimes"
							target="blank"
						>
							my Github profile
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
