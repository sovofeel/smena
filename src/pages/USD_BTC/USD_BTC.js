import React, {Component} from 'react'
// import Chart from 'components/Chart'
import {getCandlesRequest} from 'actions/apiActions'
import {connect} from 'react-redux'

class USD_BTC extends Component {

  componentDidMount() {
    this.props.getCandlesRequest('usdbtc')
  }

  render() {
    const isLoading = true

    if (isLoading) return <p>Loading...</p>

    // return <Chart data={data} />
  }
}

export default connect(null, {getCandlesRequest})(USD_BTC)
