const { ApplicationCommandOptionType } = require('discord.js');
const getDateDifference = require('../../utils/getDateDifference');

module.exports = {
    name: 'ordtime',
    description: 'Returns the time left until ORD',
    options: [
        {
            name: 'day',
            description: 'dd',
            required: true,
            type: ApplicationCommandOptionType.Number
        },
        {
            name: 'month',
            description: 'mm',
            required: true,
            type: ApplicationCommandOptionType.Number
        },
        {
            name: 'year',
            description: 'yy',
            required: true,
            type: ApplicationCommandOptionType.Number
        },
        {
            name: 'format',
            description: 'Time format for reply',
            required: true,
            type: ApplicationCommandOptionType.Number,
            choices: [
                {
                    name: 'all',
                    value: 0,
                },
                {
                    name: 'weeks',
                    value: 1,
                },
                {
                    name: 'days',
                    value: 2,
                },
                {
                    name: 'hours',
                    value: 3,
                },
                {
                    name: 'mins',
                    value: 4,
                },
                {
                    name: 'seconds',
                    value: 5,
                }
            ]
        }
    ],
    
    callback: (client, interaction) => {

        const day = interaction.options.get('day').value;
        const month = interaction.options.get('month').value;
        const year = interaction.options.get('year').value;
        const format = interaction.options.get('format').value;

        

        const ordDate = new Date(year, month - 1, day);
        const todayDate = new Date();

        const ms_diff = getDateDifference(todayDate, ordDate);
        const s_diff = Math.ceil(ms_diff/1000);
        const m_diff = Math.ceil(ms_diff/1000/60);
        const hr_diff = Math.ceil(ms_diff/1000/60/60);
        const day_diff = Math.ceil(ms_diff/1000/60/60/24);
        const wk_diff = Math.ceil(ms_diff/1000/60/60/24/7);

        
        if (format === 0){
            interaction.reply(
                `Weeks: ${wk_diff}, Days: ${day_diff}, Hrs: ${hr_diff}, Min: ${m_diff}, Seconds: ${s_diff} until your ORD Date`
            )
        } else if (format === 1){
            interaction.reply(
                `Weeks: ${wk_diff} until your ORD Date`
            )
        } else if (format === 2){
            interaction.reply(
                `Days: ${day_diff} until your ORD Date`
            )
        } else if (format === 3){
            interaction.reply(
                `Hrs: ${hr_diff} until your ORD Date`
            )
        } else if (format === 4){
            interaction.reply(
                `Min: ${m_diff} until your ORD Date`
            )
        } else if (format === 5){
            interaction.reply(
                `Seconds: ${s_diff} until your ORD Date`
            )
        } 
    }
}