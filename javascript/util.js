//localStorage setting property
function setLocalStorage(key, value){
	localStorage.setItem(key, value);
}

//localStorage setting multiple value
function setLocalStorageMultipleValue(key, value){
	localStorage.setItem(key, value)
}

//localStorage getting property
function getLocalStorage(key){
    return localStorage.getItem(key);
}

//localstorage remove property
function removeLocalStorage(key){
	return localStorage.removeItem(key);
}

//sessionStorage setting property
function setSessionStorage(key, value){
	sessionStorage.setItem(key, value);
}

//sessionStorage getting property
function getSessionStorage(key){
	return sessionStorage.getItem(key);
}

//sessionstorage remove property
function removeSessionStorage(key){
	return sessionStorage.removeItem(key);
}