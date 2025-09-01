import { useScroll, motion, useSpring, useTransform } from "motion/react"



export default function Test5(){


    const { scrollYProgress} = useScroll();

    const scaleX = useSpring(scrollYProgress);

    const background = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        ["rgba(255, 0, 51, 1)", "rgb(255, 215, 0)", "rgb(0, 255, 0)"]
     );

    return (

        <>
        <div>

            <motion.div 
            style={{
                transformOrigin: "left",
                position: "sticky",
                top: 0,
                width: "100%",
                height: "20px",
                background: background,
                // scaleX: scrollYProgress
                scaleX: scaleX
            }}

            />

        <div
        style={{
            maxWidth: "700px",
            margin: "auto",
            padding: "1.2rem"
        }}
        >
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione sed iure nostrum rem quo accusantium inventore dolor, ab nobis dolorum amet mollitia quisquam, voluptatem in. Eius quis in corporis. Doloribus!
            Inventore, blanditiis expedita sit tempora pariatur deserunt maiores nobis facere perspiciatis error sequi quia totam vitae ullam delectus fugit aspernatur assumenda praesentium eaque nulla? Veritatis quasi tempora nisi maxime ut!
            Voluptatum officiis ullam earum minima ea incidunt eos, ratione, corrupti dolorem, mollitia deleniti. Dolorum, omnis debitis deserunt cupiditate eaque ullam animi rerum eligendi eveniet! Quis distinctio maiores officiis laborum omnis?
            Earum aliquam vero a aspernatur perferendis, quisquam labore aliquid voluptatibus est inventore dignissimos ea obcaecati nulla enim ut quos veniam. Nam architecto ducimus quos deserunt ea et officiis id quisquam!
            Culpa atque hic sunt quibusdam ut, dolorum dignissimos enim nulla. Est laborum non, quos tempora maiores veniam dolore iste accusantium mollitia dolor repudiandae nostrum doloribus iusto autem similique, quisquam beatae?
            Quo voluptatum est nam! Esse aliquam mollitia animi praesentium, vero sunt corrupti deleniti quisquam obcaecati error cum quo quaerat quia ut dicta. Cumque voluptatibus, totam expedita perferendis autem praesentium sequi.
            Quas minima doloremque maiores non? Debitis, vitae consectetur. Eum soluta necessitatibus quas dicta iusto delectus accusantium in cupiditate nam aperiam mollitia consequuntur, aliquam non doloribus cumque minima deserunt veniam hic?
            Maiores reiciendis debitis tempora, architecto atque delectus ut nam. Incidunt dolore ipsum eligendi iste earum eum? Aliquam provident repudiandae veritatis placeat, expedita voluptatem quos illo quod architecto error sapiente molestiae?
            Omnis fuga ullam officiis beatae</p>


             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione sed iure nostrum rem quo accusantium inventore dolor, ab nobis dolorum amet mollitia quisquam, voluptatem in. Eius quis in corporis. Doloribus!
            Inventore, blanditiis expedita sit tempora pariatur deserunt maiores nobis facere perspiciatis error sequi quia totam vitae ullam delectus fugit aspernatur assumenda praesentium eaque nulla? Veritatis quasi tempora nisi maxime ut!
            Voluptatum officiis ullam earum minima ea incidunt eos, ratione, corrupti dolorem, mollitia deleniti. Dolorum, omnis debitis deserunt cupiditate eaque ullam animi rerum eligendi eveniet! Quis distinctio maiores officiis laborum omnis?
            Earum aliquam vero a aspernatur perferendis, quisquam labore aliquid voluptatibus est inventore dignissimos ea obcaecati nulla enim ut quos veniam. Nam architecto ducimus quos deserunt ea et officiis id quisquam!
            Culpa atque hic sunt quibusdam ut, dolorum dignissimos enim nulla. Est laborum non, quos tempora maiores veniam dolore iste accusantium mollitia dolor repudiandae nostrum doloribus iusto autem similique, quisquam beatae?
            Quo voluptatum est nam! Esse aliquam mollitia animi praesentium, vero sunt corrupti deleniti quisquam obcaecati error cum quo quaerat quia ut dicta. Cumque voluptatibus, totam expedita perferendis autem praesentium sequi.
            Quas minima doloremque maiores non? Debitis, vitae consectetur. Eum soluta necessitatibus quas dicta iusto delectus accusantium in cupiditate nam aperiam mollitia consequuntur, aliquam non doloribus cumque minima deserunt veniam hic?
            Maiores reiciendis debitis tempora, architecto atque delectus ut nam. Incidunt dolore ipsum eligendi iste earum eum? Aliquam provident repudiandae veritatis placeat, expedita voluptatem quos illo quod architecto error sapiente molestiae?
            Omnis fuga ullam officiis beatae</p>


             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione sed iure nostrum rem quo accusantium inventore dolor, ab nobis dolorum amet mollitia quisquam, voluptatem in. Eius quis in corporis. Doloribus!
            Inventore, blanditiis expedita sit tempora pariatur deserunt maiores nobis facere perspiciatis error sequi quia totam vitae ullam delectus fugit aspernatur assumenda praesentium eaque nulla? Veritatis quasi tempora nisi maxime ut!
            Voluptatum officiis ullam earum minima ea incidunt eos, ratione, corrupti dolorem, mollitia deleniti. Dolorum, omnis debitis deserunt cupiditate eaque ullam animi rerum eligendi eveniet! Quis distinctio maiores officiis laborum omnis?
            Earum aliquam vero a aspernatur perferendis, quisquam labore aliquid voluptatibus est inventore dignissimos ea obcaecati nulla enim ut quos veniam. Nam architecto ducimus quos deserunt ea et officiis id quisquam!
            Culpa atque hic sunt quibusdam ut, dolorum dignissimos enim nulla. Est laborum non, quos tempora maiores veniam dolore iste accusantium mollitia dolor repudiandae nostrum doloribus iusto autem similique, quisquam beatae?
            Quo voluptatum est nam! Esse aliquam mollitia animi praesentium, vero sunt corrupti deleniti quisquam obcaecati error cum quo quaerat quia ut dicta. Cumque voluptatibus, totam expedita perferendis autem praesentium sequi.
            Quas minima doloremque maiores non? Debitis, vitae consectetur. Eum soluta necessitatibus quas dicta iusto delectus accusantium in cupiditate nam aperiam mollitia consequuntur, aliquam non doloribus cumque minima deserunt veniam hic?
            Maiores reiciendis debitis tempora, architecto atque delectus ut nam. Incidunt dolore ipsum eligendi iste earum eum? Aliquam provident repudiandae veritatis placeat, expedita voluptatem quos illo quod architecto error sapiente molestiae?
            Omnis fuga ullam officiis beatae</p>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione sed iure nostrum rem quo accusantium inventore dolor, ab nobis dolorum amet mollitia quisquam, voluptatem in. Eius quis in corporis. Doloribus!
            Inventore, blanditiis expedita sit tempora pariatur deserunt maiores nobis facere perspiciatis error sequi quia totam vitae ullam delectus fugit aspernatur assumenda praesentium eaque nulla? Veritatis quasi tempora nisi maxime ut!
            Voluptatum officiis ullam earum minima ea incidunt eos, ratione, corrupti dolorem, mollitia deleniti. Dolorum, omnis debitis deserunt cupiditate eaque ullam animi rerum eligendi eveniet! Quis distinctio maiores officiis laborum omnis?
            Earum aliquam vero a aspernatur perferendis, quisquam labore aliquid voluptatibus est inventore dignissimos ea obcaecati nulla enim ut quos veniam. Nam architecto ducimus quos deserunt ea et officiis id quisquam!
            Culpa atque hic sunt quibusdam ut, dolorum dignissimos enim nulla. Est laborum non, quos tempora maiores veniam dolore iste accusantium mollitia dolor repudiandae nostrum doloribus iusto autem similique, quisquam beatae?
            Quo voluptatum est nam! Esse aliquam mollitia animi praesentium, vero sunt corrupti deleniti quisquam obcaecati error cum quo quaerat quia ut dicta. Cumque voluptatibus, totam expedita perferendis autem praesentium sequi.
            Quas minima doloremque maiores non? Debitis, vitae consectetur. Eum soluta necessitatibus quas dicta iusto delectus accusantium in cupiditate nam aperiam mollitia consequuntur, aliquam non doloribus cumque minima deserunt veniam hic?
            Maiores reiciendis debitis tempora, architecto atque delectus ut nam. Incidunt dolore ipsum eligendi iste earum eum? Aliquam provident repudiandae veritatis placeat, expedita voluptatem quos illo quod architecto error sapiente molestiae?
            Omnis fuga ullam officiis beatae</p>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione sed iure nostrum rem quo accusantium inventore dolor, ab nobis dolorum amet mollitia quisquam, voluptatem in. Eius quis in corporis. Doloribus!
            Inventore, blanditiis expedita sit tempora pariatur deserunt maiores nobis facere perspiciatis error sequi quia totam vitae ullam delectus fugit aspernatur assumenda praesentium eaque nulla? Veritatis quasi tempora nisi maxime ut!
            Voluptatum officiis ullam earum minima ea incidunt eos, ratione, corrupti dolorem, mollitia deleniti. Dolorum, omnis debitis deserunt cupiditate eaque ullam animi rerum eligendi eveniet! Quis distinctio maiores officiis laborum omnis?
            Earum aliquam vero a aspernatur perferendis, quisquam labore aliquid voluptatibus est inventore dignissimos ea obcaecati nulla enim ut quos veniam. Nam architecto ducimus quos deserunt ea et officiis id quisquam!
            Culpa atque hic sunt quibusdam ut, dolorum dignissimos enim nulla. Est laborum non, quos tempora maiores veniam dolore iste accusantium mollitia dolor repudiandae nostrum doloribus iusto autem similique, quisquam beatae?
            Quo voluptatum est nam! Esse aliquam mollitia animi praesentium, vero sunt corrupti deleniti quisquam obcaecati error cum quo quaerat quia ut dicta. Cumque voluptatibus, totam expedita perferendis autem praesentium sequi.
            Quas minima doloremque maiores non? Debitis, vitae consectetur. Eum soluta necessitatibus quas dicta iusto delectus accusantium in cupiditate nam aperiam mollitia consequuntur, aliquam non doloribus cumque minima deserunt veniam hic?
            Maiores reiciendis debitis tempora, architecto atque delectus ut nam. Incidunt dolore ipsum eligendi iste earum eum? Aliquam provident repudiandae veritatis placeat, expedita voluptatem quos illo quod architecto error sapiente molestiae?
            Omnis fuga ullam officiis beatae</p>
        </div>
            </div>

        </>
    )
}