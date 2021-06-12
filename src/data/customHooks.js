import { useEffect, useState } from "../framework/hooks";
import { loadRandomUserData } from "./randomUserAPI";

export const useFriends = () => {
    const [friends, setFriends] = useState([]);
    const [filteredFriends, setFilteredFriends] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [currentName, setCurrentName] = useState('');
    const [currentAge, setCurrentAge] = useState('');
    const [currentEmail, setCurrentEmail] = useState('');

    useEffect(() => {
        if (friends.length == 0) {
            loadRandomUserData()
                .then(data => {
                    setFriends(data.results);
                    setFilteredFriends(data.results);
                })
                .catch(setError)
                .finally(() => setIsLoading(false));
        }

        if (currentName || currentAge || currentEmail) {
            let filterFriends = friends;
            if (currentName) {
                filterFriends = filterFriends.filter(friend => {
                    return `${friend.name.first} ${friend.name.last}`
                        .toLowerCase()
                        .includes(currentName.toLowerCase());
                });
            }
            if (currentAge) {
                filterFriends = filterFriends.filter(friend => {
                    return +friend.dob.age === +currentAge;
                });
            }
            if (currentEmail) {
                filterFriends = filterFriends.filter(friend => {
                    return `${friend.email}`.toLowerCase().includes(currentEmail.toLowerCase());
                });
            }
            setFilteredFriends(filterFriends);
        }
        if (!currentName && !currentAge && !currentEmail && !isLoading) setFilteredFriends(friends);

    }, [currentName, currentAge, currentEmail]);

    return {
        error,
        isLoading,
        filteredFriends,
        currentEmail,
        currentAge,
        currentName,
        setCurrentEmail,
        setCurrentName,
        setCurrentAge,
    };
};