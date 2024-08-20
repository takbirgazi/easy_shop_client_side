import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [search, setSearch] = useState('');
    const [sortValue, setSortValue] = useState('');
    const [categoryValue, setCategoryValue] = useState('');

    const authInfo = {
        search,
        setSearch,
        sortValue,
        setSortValue,
        categoryValue,
        setCategoryValue,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.object,
}