import './ActiveUserList.css'

const activeUserList = [
    {id: 'dungtda', name: 'Dungtda', isActive: true},
    {id: 'phuongvt', name: 'Phuongvt', isActive: false},
    {id: 'quantda', name: 'Quantda', isActive: false},
];

export default function ActiveUserList() {
    const listUsers = activeUserList.map(user =>
        <li
            key={user.id}
            style={{
                color: user.isActive ? 'green' : 'gray',
            }}
        >
            {user.name}
        </li>
    )


    return (
        <ul id='user-list'>
            {listUsers}
        </ul>
    );
}

