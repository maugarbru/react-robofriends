import React, { useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import { setSearchField, requestRobots } from '../actions.js'
import { connect } from 'react-redux'
import './App.css'

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

const App = (props) => {
    const { onSearchChange, onRequestRobots, searchField, robots, isPending } = props

    useEffect(() => {
        onRequestRobots()
    }, [onRequestRobots])

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLocaleLowerCase().includes(searchField.toLowerCase());
    })

    return isPending ?
        (
            <div className="tc">
                <h1 className="f2">Loading...</h1>
            </div>
        )
        :
        (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        )

}

export default connect(mapStateToProps, mapDispatchToProps)(App)