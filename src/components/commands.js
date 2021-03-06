import React from 'react'
import '../styles/commands.css';

const github_name = 'jmjumper';

const Help = () => {
    return (
        <div>
            <div>List of available commands:</div>
            <div className='subList'>
                <span className='command'>whois</span> yeah, that is about me
            </div>
            <div className='subList'>
                <span className='command'>github</span> find all projects over there
            </div>
            <div className='subList'>
                <span className='command'>projects</span> not too interesting, but still..
            </div>
            <div className='subList'>
                <span className='command'>ascii-art</span> generate random ascii-art :)
            </div>
            <div className='subList'>
                <span className='command'>clear</span> well, it clears the terminal
            </div>
        </div>
    )
}

const Whois = () => {
    return (
        <div>
            <div><span className='command'>Whoami?</span> Julian!</div>
            <div className='long-text'>My name is Julian (online-nickname: jmjumper), an aspiring computer scientist. I do lots of tech-stuff since I'm really into those things. I spend almost everyday learning more and more about various computer related topics. Most of the time, I code some projects in a wide range of frameworks and programming languages. You can have a look at what I have already done on my Github (use the <span className='command'>github</span>-command).</div>
        </div>
    )
}

const Github = () => {
    return (
        <div>
            <div><a className='link' href={'https://www.github.com/' + github_name} target='_blank' rel="noreferrer noopener">github.com/{github_name}</a></div>
            <div className='long-text'>Here, you may find all my projects. Not many yet, but it'll get more soon! Find details on my projects with the <span className='command'>projects</span>-command</div>
        </div>
    )
}

const Projects = () => {
    return (
        <div>
            <div className='subList'><a className='link' href='https://github.com/jmjumper/Goetheplan' target='_blank' rel="noreferrer noopener">Goetheplan</a> - Substitution-plan app for my school (JavaScript)</div>
            <div className='long-text'>
                Together with a friend of mine (<a className='link' href='https://www.github.com/cyborck' target='_blank' rel="noreferrer noopener">cyborck</a>), we developed an app for the students of our school which provides the most recent substitution information. There already was such an app but nobody really liked it. {<br />}
                The backend (which was done by cyborck) was written in Java with the Spring framework and extracts the data of the official app. The frontend (done by me) were implemented with the React Native framework.
                This is probably my most important project.
            </div>

            <br />
            <div className='subList'><a className='link' href='https://github.com/jmjumper/MakeDownloadfoldersPrettyAgain' target='_blank' rel="noreferrer noopener">MakeDownloadfoldersPrettyAgain</a> - Download-Folder Organizer (Python)</div>
            <div className='long-text'>
                This small Python project makes your download-folder finally pretty again. It sorts all files by their extensions into according subfolders.
            </div>

            <br />
            <div className='subList'><a className='link' href='https://github.com/jmjumper/RayCasting' target='_blank' rel="noreferrer noopener">RayCasting</a> - casts light rays to 3D (Java)</div>
            <div className='long-text'>
                This program simulates and determines shadows and light. These light rays are used to render a 3D world by representing cach one 'column' of pixels. This technique were often used in old ego-shooter computer games such as Doom or Duke Nukem. I love it.
            </div>

            <br />
            <div className='subList'><a className='link' href='https://github.com/jmjumper/SortAlgoViewer' target='_blank' rel="noreferrer noopener">Sortalgorithm Viewer</a> - visualizes sort algorithms (Java)</div>
            <div className='long-text'>
                This program just visualizes sorting algorithms. I highly encourage you to lower your volume. Thank me later. 
            </div>

            <br />
            <div className='long-text'>
                There will certainly be coming more in the future...
            </div>
        </div>
    )
}

const Ls = () => {
    return (
        <div>
            secret.txt
        </div>
    )
}

const Cat = () => {
    return (
        <div>
            todo: {<br />}
            remove this account as super-user, otherwise users can use <span className='command'>sudo</span>..
        </div>
    )
}

export { Help, Whois, Github, Projects, Ls, Cat }; 