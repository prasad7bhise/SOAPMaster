package com.sunbeaminfo.ecomm.adapter;
import android.content.Context;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.koushikdutta.async.Util;
import com.koushikdutta.ion.Ion;
import com.sunbeaminfo.ecomm.R;
import com.sunbeaminfo.ecomm.model.Menu_list;
import com.sunbeaminfo.ecomm.utils.Utils;
import java.util.ArrayList;

public class MenulistAdapater extends RecyclerView.Adapter<MenulistAdapater.ViewHolder> {
    private final Context context;
    private final ArrayList<Menu_list> menus;
    public MenulistAdapater(Context context, ArrayList<Menu_list> menus){
        this.context = context;
        this.menus = menus;
    }
    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType){
        LayoutInflater inflater = LayoutInflater.from(context);
        return new ViewHolder(inflater.inflate(R.layout.recycler_item_menu,null));

    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        Menu_list menu =  menus.get(position);
        holder.textCategory_id.setText(""+ menu.getCategory_id());
        holder.textMenu_id.setText(""+ menu.getMenu_id());
        holder.textMenu_name.setText(menu.getMenu_name());
        holder.textPrice.setText(""+  menu.getPrice());
       // Log.e("MenuListActivity",result.toString);
    }

    @Override
    public int getItemCount(){
        return  menus.size();
    }





public class ViewHolder extends RecyclerView.ViewHolder{
        TextView textCategory_id, textMenu_id, textMenu_name, textPrice;

    public ViewHolder(@NonNull View itemView) {
        super(itemView);
        textCategory_id = itemView.findViewById(R.id.textCategory_id);
        textMenu_id = itemView.findViewById(R.id.textMenu_id);
        textMenu_name = itemView.findViewById(R.id.textMenu_name);
        textPrice = itemView.findViewById(R.id.textPrice);

    }
}

}
