function getDisplayName(user){
    return `${user.firstName} ${user.lastName}`
}

function getLocation(user){
    return { city: user.address.city, country: user.address.country}
}

function getContactSummary(user){
    return {
        email: user.email,
        phone: user.phone
    }
}

function isAccountActive(user){
    return user.account.status === 'active'
}

function createProfileSummary(user){
    const displayName = getDisplayName(user)
    const location = getLocation(user)
    const contact = getContactSummary(user)
    const isActive = isAccountActive(user)
    const userPlan = user.account.plan

    return {
        displayName: displayName,
        location: `${location.city}, ${location.country}`,
        contact: contact,
        active: isActive,
        plan: userPlan
    }
}

const user = {
    id: 42,
    firstName: 'Ava',
    lastName: 'Stone',
    email: 'ava@example.com',
    phone: null,
    address: {
        city: 'London',
        country: 'UK',
    },
    account: {
        status: 'active',
        plan: 'pro',
    },
};

console.log(createProfileSummary(user));
console.log(getDisplayName(user));
console.log(isAccountActive(user));
console.log(getContactSummary(user));