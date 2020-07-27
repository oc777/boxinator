package com.oc.boxinator.repository;

import com.oc.boxinator.model.Box;
import java.util.List;

public interface IBoxRepository {
    List<Box> findAll();
    int addBox(Box box);
}