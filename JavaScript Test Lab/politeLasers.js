function getLaserSetting(word)
{
    if (word === 'please') 
    {
        return "OFF"
    }
    return "ON"
}

console.log(getLaserSetting("pleas"))