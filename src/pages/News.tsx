import { Link } from '@tanstack/react-router';
import { Icon } from '../components/ui/Icon';
import { useDashboardHeight } from '../hooks/use-dashboard-height';

export const News = () => {
  const height = useDashboardHeight({ withPadding: true });

  return (
    <div
      className="border-main relative mt-4 flex h-full w-full flex-col justify-between"
      style={{ height }}
    >
      <div className="sticky top-0 flex h-fit w-full justify-between border-b-8 border-black bg-white">
        <h2 className="p-4">Hello /_protected/dashboard/news!</h2>
        <Link to="/dashboard" className="flex items-center px-5 py-4">
          <Icon kind="close" aria-hidden />
          <span className="sr-only">Back to dashboard</span>
        </Link>
      </div>
      <div className="flex flex-col gap-4 overflow-auto p-4">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro,
          dignissimos quo! Iusto necessitatibus praesentium accusantium sunt
          corporis ipsum omnis error ducimus libero, maxime suscipit ipsa
          molestias modi ipsam velit aspernatur. Accusamus error dolorem dolores
          similique neque magni iusto quae officia dicta voluptatibus nesciunt
          cum alias labore voluptas repudiandae dolorum maiores quas, ad vitae
          doloribus?
        </p>
        <p>
          Aliquid deserunt at ea iusto amet. Ratione ducimus illum velit quasi,
          voluptatum laborum autem amet vel blanditiis adipisci id harum
          temporibus, impedit repudiandae veniam deserunt? Pariatur odio atque
          qui voluptas veritatis error culpa quis, amet ullam. Quos quidem
          officiis molestiae, quibusdam itaque expedita doloribus velit nam?
          Molestiae earum reiciendis voluptates laborum officia! Est fugiat,
          animi repudiandae, minus distinctio perspiciatis totam assumenda
          commodi temporibus blanditiis, recusandae veniam?
        </p>
        <p>
          Quod molestias libero iste assumenda, totam nisi, ipsam, adipisci
          quibusdam obcaecati amet iusto atque eaque culpa labore blanditiis sit
          harum distinctio. Accusamus, fuga. Deserunt ipsa, quas natus magni
          neque ut. Doloribus asperiores, quaerat inventore doloremque aperiam
          nam ut vitae voluptate suscipit fugit, ea illo commodi unde dolor sed
          aliquam nostrum ad odio quisquam! Ducimus unde eum autem nemo quia?
          Ea! Voluptatum sit odio, quasi nostrum cupiditate officia unde quos
          repudiandae ad magnam officiis? Voluptate, autem numquam sint ducimus
          animi error voluptas commodi expedita quae! Ipsa iusto tempora quis
          reprehenderit fugiat!
        </p>
        <p>
          Ad saepe ut numquam ratione exercitationem eius sed architecto
          laboriosam deserunt rem unde eveniet, voluptates voluptatibus
          aspernatur! Accusantium quidem repellendus exercitationem unde
          cupiditate, a iure at asperiores eaque, reprehenderit voluptatum.
          Totam, sunt enim? Assumenda ipsa omnis non alias rem aliquam, modi
          possimus sed? Quos culpa quam maxime illum ea repellat aperiam id,
          quas tenetur magni atque ab corrupti. Ab, neque? Consequatur tenetur
          eveniet obcaecati architecto? A quasi enim reprehenderit, tenetur
          quisquam aliquid iste voluptatibus veniam dolores, quam tempora
          voluptatem molestiae excepturi nobis sit praesentium error incidunt
          nulla esse quia in! Numquam iste repellat porro adipisci error sunt ad
          doloribus rem libero eius nisi id, aperiam officia neque architecto
          assumenda alias repudiandae dolorem ratione. A ex aliquid, quae
          commodi ducimus consequatur.
        </p>
      </div>
    </div>
  );
};
