const UserData = ({users}) => {
    return (
        <>
            {
                users.map((curUser) => {
                    const {id, user, title, category} = curUser;
                    // const {type} = curUser.notes;

                    return (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{user}</td>
                            <td>{title}</td>
                            <td>{category}</td>
                            {/* <td>{type}</td> */}
                        </tr>
                    )
                })

            }
        </>
    )
}
export default UserData;