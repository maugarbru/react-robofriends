import React, { useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import Counter from '../components/Counter'
import ErrorBoundry from '../components/ErrorBoundry'
import Timer from '../components/Timer'
import { setSearchField, requestRobots } from '../actions.js'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'

const App = () => {
    const robots = useSelector((state) => state.requestRobots.robots)
    const searchField = useSelector((state) => state.searchRobots.searchField)
    const isPending = useSelector((state) => state.requestRobots.isPending)
    const dispatch = useDispatch()

    const onSearchChange = (event) => {
        dispatch(setSearchField(event.target.value))
    }

    const onRequestRobots = () => {
        dispatch(requestRobots())
    }

    useEffect(() => {
        onRequestRobots()
    }, [])

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
                <Counter />
                <Timer initial="10" />
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        )

}

export default App