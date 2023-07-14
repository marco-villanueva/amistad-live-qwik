import { $, component$, useSignal, useTask$, useVisibleTask$ } from '@builder.io/qwik';

interface CountdownProps {
    date: string;
}

interface timeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export const Countdown = component$<CountdownProps>(({ date }) => {

    const targetDate = new Date(date);

    const calculateTimeLeft = $(() => {
        const difference = +targetDate - +new Date();
        console.log({difference})
        let timeLeft: timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    });

    const days = useSignal(0);
    const hours = useSignal(0);
    const minutes = useSignal(0);
    const seconds = useSignal(0);

    useVisibleTask$(({ cleanup }) => {
        const timer = setInterval(async () => {
            const timeLeft = calculateTimeLeft();
            days.value = (await timeLeft).days;
            hours.value = (await timeLeft).hours;
            minutes.value = (await timeLeft).minutes;
            seconds.value = (await timeLeft).seconds;
          }, 1000);
        cleanup(() => clearTimeout(timer));
    })

    return (
        <div class="countdown-container">
            <div class="countdown-box">
                <span class="countdown-number">{days.value}</span>
                <span class="countdown-text">DIAS</span>
            </div>
            <div class="countdown-box">
                <span class="countdown-number">{hours.value}</span>
                <span class="countdown-text">HORAS</span>
            </div>
            <span class="countdown-dots">:</span>
            <div class="countdown-box">
                <span class="countdown-number">{minutes.value}</span>
                <span class="countdown-text">MINUTOS</span>
            </div>
            <span class="countdown-dots">:</span>
            <div class="countdown-box">
                <span class="countdown-number">{seconds.value}</span>
                <span class="countdown-text">SEGUNDOS</span>
            </div>
        </div>
    );
});


