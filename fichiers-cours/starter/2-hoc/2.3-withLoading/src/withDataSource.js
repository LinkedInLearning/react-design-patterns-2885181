import { useMemo } from 'react';
import reactLogo from './svg/react-logo.svg';
import angularLogo from './svg/angular-logo.svg';
import vueLogo from './svg/vuejs-logo.svg';


const withDataSource = Component => props => {
    let libraries = {
        React: {
            name: 'React',
            url: 'https://reactjs.org/',
            logo: reactLogo,
        },
        Vue: {
            name: 'Vue',
            url: 'https://vuejs.org/',
            logo: vueLogo,
            style: { background: '#ecf0f1', color: '#333' }
        },
        Angular: {
            name: 'Angular',
            url: 'https://angular.io/',
            logo: angularLogo,
            style: { background: '#1976d2' }
        }
    }
    const isSelected = useMemo(() => {
        return !!props.library ? [libraries[props.library]] : Object.values(libraries)
    })

    return (<Component {...props} items={isSelected} />)
}
export default withDataSource;