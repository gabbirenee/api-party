import React, { Component } from 'react'

import './Github.css'

class Github extends Component {
    render () {
        return (
            <div className="Github">
                <img 
                    src="http://www.aha.io/assets/github.7433692cabbfa132f34adb034e7909fa.png"
                    alt="GitHub"    
                />
                <form>
                    <div>
                        <input type="text" />
                    </div>
                </form>
                <div>
                    <button type="submit">Look up GitHub user</button>
                </div>
            </div> 
        )
    }
}

export default Github